import PageLayout from "@/components/PageLayout";
import { getPublicPlaylists } from "@/lib/spotify";
import type { SpotifyPlaylist } from "@/lib/spotify";

function formatRelative(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const days = Math.floor((now - then) / (1000 * 60 * 60 * 24));
  if (days <= 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 7) return `${days} days ago`;
  if (days < 30) return `${Math.floor(days / 7)}w ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

function PlaylistCard({ playlist }: { playlist: SpotifyPlaylist }) {
  const image = playlist.images[0]?.url;

  return (
    <a
      href={playlist.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="flex gap-4 items-start">
        {image && (
          <img
            src={image}
            alt={playlist.name}
            width={80}
            height={80}
            className="w-[80px] h-[80px] object-cover rounded flex-shrink-0"
            loading="lazy"
          />
        )}
        <div className="min-w-0">
          <span className="text-[13px] font-semibold group-hover:underline">
            {playlist.name}
          </span>
          <p className="text-[13px] text-neutral-400">
            {playlist.tracks.total} tracks
          </p>
          {playlist.last_updated && (
            <p className="text-[13px] text-neutral-500">
              Updated {formatRelative(playlist.last_updated)}
            </p>
          )}
        </div>
      </div>
    </a>
  );
}

export default async function Music() {
  let playlists: SpotifyPlaylist[] = [];
  let error: string | null = null;

  try {
    playlists = await getPublicPlaylists();
  } catch (e) {
    error = e instanceof Error ? e.message : "Failed to load playlists";
  }

  const sorted = [...playlists].sort((a, b) => {
    const aDate = a.last_updated ? new Date(a.last_updated).getTime() : 0;
    const bDate = b.last_updated ? new Date(b.last_updated).getTime() : 0;
    return bDate - aDate;
  });

  return (
    <PageLayout activeNav="music">
      <div className="space-y-6">
        <p className="text-[13px] text-neutral-400">
          I spend a lot of time on these playlists — hope you enjoy listening to
          them as much as I enjoy making them.
        </p>

        {error && (
          <p className="text-[13px] text-neutral-400">
            Could not load playlists. Check back later.
          </p>
        )}

        <ul className="grid grid-cols-2 gap-5">
          {sorted.map((playlist) => (
            <li key={playlist.id}>
              <PlaylistCard playlist={playlist} />
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  );
}
