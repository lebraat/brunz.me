const SPOTIFY_USER_ID = "12137081094";

interface SpotifyImage {
  url: string;
  height: number | null;
  width: number | null;
}

export interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  external_urls: { spotify: string };
  images: SpotifyImage[];
  tracks: { total: number };
  public: boolean;
  owner: { display_name: string };
  last_updated?: string | null;
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing Spotify credentials");
  }

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`,
    },
    body: "grant_type=client_credentials",
    next: { revalidate: 3500 },
  });

  if (!res.ok) {
    throw new Error("Failed to get Spotify access token");
  }

  const data = await res.json();
  return data.access_token;
}

export async function getPublicPlaylists(): Promise<SpotifyPlaylist[]> {
  const token = await getAccessToken();
  const playlists: SpotifyPlaylist[] = [];
  let url: string | null =
    `https://api.spotify.com/v1/users/${SPOTIFY_USER_ID}/playlists?limit=50`;

  while (url) {
    const res: Response = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch playlists");
    }

    const data = await res.json();
    const owned = data.items.filter(
      (p: SpotifyPlaylist) =>
        p.public && p.owner.display_name === "Daniel Dale",
    );
    playlists.push(...owned);
    url = data.next;
  }

  // Fetch the most recent track addition for each playlist (in parallel)
  await Promise.all(
    playlists.map(async (playlist) => {
      try {
        const total = playlist.tracks.total;
        if (total === 0) return;
        const offset = Math.max(0, total - 50);
        const res = await fetch(
          `https://api.spotify.com/v1/playlists/${playlist.id}/tracks?fields=items(added_at)&limit=50&offset=${offset}`,
          {
            headers: { Authorization: `Bearer ${token}` },
            next: { revalidate: 3600 },
          },
        );
        if (!res.ok) return;
        const data = await res.json();
        const dates: string[] = (data.items || [])
          .map((it: { added_at?: string }) => it.added_at)
          .filter((d: string | undefined): d is string => Boolean(d));
        if (dates.length > 0) {
          playlist.last_updated = dates.sort().reverse()[0];
        }
      } catch {
        // ignore per-playlist failures
      }
    }),
  );

  return playlists;
}
