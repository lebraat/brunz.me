import PageLayout from '@/components/PageLayout'
import { getPublicPlaylists } from '@/lib/spotify'
import type { SpotifyPlaylist } from '@/lib/spotify'

function PlaylistCard({ playlist }: { playlist: SpotifyPlaylist }) {
  const image = playlist.images[0]?.url

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
          {playlist.description && (
            <p className="text-[13px] text-neutral-400 mt-1 line-clamp-2">
              {playlist.description.replace(/&#x27;/g, "'")}
            </p>
          )}
        </div>
      </div>
    </a>
  )
}

export default async function Music() {
  let playlists: SpotifyPlaylist[] = []
  let error: string | null = null

  try {
    playlists = await getPublicPlaylists()
  } catch (e) {
    error = e instanceof Error ? e.message : 'Failed to load playlists'
  }

  return (
    <PageLayout activeNav="music">
      <div className="space-y-6">
        <div className="text-[13px] text-neutral-400">
          Public playlists from Spotify
        </div>

        {error && (
          <p className="text-[13px] text-neutral-400">
            Could not load playlists. Check back later.
          </p>
        )}

        <ul className="space-y-5">
          {playlists.map((playlist) => (
            <li key={playlist.id}>
              <PlaylistCard playlist={playlist} />
            </li>
          ))}
        </ul>
      </div>
    </PageLayout>
  )
}
