import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { notFound } from 'next/navigation'
import { getPlayEntry, getAllPlaySlugs } from '@/lib/play'
import { serialize } from 'next-mdx-remote/serialize'
import MDXContent from '@/components/MDXContent'

export function generateStaticParams() {
  return getAllPlaySlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = getPlayEntry(params.slug)
  if (!entry) return { title: 'Not Found' }

  return {
    title: `${entry.title} – Brunz`,
    description: entry.description,
  }
}

export default async function PlayPage({ params }: { params: { slug: string } }) {
  const entry = getPlayEntry(params.slug)

  if (!entry) {
    notFound()
  }

  const mdxSource = await serialize(entry.content)

  return (
    <PageLayout activeNav="play">
      <Link
        href="/play"
        className="inline-flex items-center gap-1 text-[13px] text-neutral-400 hover:text-black transition-colors mb-8"
      >
        <span>←</span> Back to play
      </Link>

      <header className="mb-8">
        <h2 className="text-[13px] font-semibold leading-snug mb-1">
          {entry.title}
        </h2>
        <p className="text-[13px] text-neutral-400">
          {entry.date} · {entry.discipline}
        </p>
      </header>

      <p className="text-[13px] leading-relaxed mb-8">
        {entry.description}
      </p>

      <div className="text-[13px] leading-relaxed">
        <MDXContent source={mdxSource} />
      </div>

      {entry.images && entry.images.length > 0 && (
        <div className="mt-10 space-y-6">
          {entry.images.map((image, index) => (
            <figure key={index}>
              <div className="bg-neutral-100 rounded-lg overflow-hidden">
                <div className="aspect-video flex items-center justify-center text-neutral-400 text-sm">
                  {image.alt}
                </div>
              </div>
              {image.caption && (
                <figcaption className="mt-2 text-[13px] text-neutral-400">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {entry.links && entry.links.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[13px] font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            {entry.links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-neutral-600 hover:text-black hover:underline transition-colors"
                >
                  {link.label} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </PageLayout>
  )
}
