const SPOTIFY_USER_ID = '12137081094'

interface SpotifyImage {
  url: string
  height: number | null
  width: number | null
}

export interface SpotifyPlaylist {
  id: string
  name: string
  description: string
  external_urls: { spotify: string }
  images: SpotifyImage[]
  tracks: { total: number }
  public: boolean
  owner: { display_name: string }
}

async function getAccessToken(): Promise<string> {
  const clientId = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  if (!clientId || !clientSecret) {
    throw new Error('Missing Spotify credentials')
  }

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
    },
    body: 'grant_type=client_credentials',
    next: { revalidate: 3500 },
  })

  if (!res.ok) {
    throw new Error('Failed to get Spotify access token')
  }

  const data = await res.json()
  return data.access_token
}

export async function getPublicPlaylists(): Promise<SpotifyPlaylist[]> {
  const token = await getAccessToken()
  const playlists: SpotifyPlaylist[] = []
  let url: string | null = `https://api.spotify.com/v1/users/${SPOTIFY_USER_ID}/playlists?limit=50`

  while (url) {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error('Failed to fetch playlists')
    }

    const data = await res.json()
    const owned = data.items.filter(
      (p: SpotifyPlaylist) => p.public && p.owner.display_name === 'Daniel Dale'
    )
    playlists.push(...owned)
    url = data.next
  }

  return playlists
}
