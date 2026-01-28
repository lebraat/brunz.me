import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getWorkEntry, getAllWorkSlugs } from '@/lib/work'

export function generateStaticParams() {
  return getAllWorkSlugs().map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const entry = getWorkEntry(params.slug)
  if (!entry) return { title: 'Not Found' }

  return {
    title: `${entry.title} – Brunz`,
    description: entry.description,
  }
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const entry = getWorkEntry(params.slug)

  if (!entry) {
    notFound()
  }

  return (
    <main className="min-h-screen md:h-screen flex flex-col px-6">
      <div className="max-w-[900px] w-full mx-auto flex flex-col md:h-full">
        {/* Container 1: Header - spans full width */}
        <header className="pt-8 md:pt-16 pb-4 md:pb-6">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-[38px] h-[38px] flex-shrink-0">
              <Image
                src="/avatar.png"
                alt="Daniel Brunsdon"
                width={38}
                height={38}
                className="rounded-full object-cover"
              />
            </div>

            {/* Name and Title */}
            <div>
              <h1 className="text-[13px] font-semibold leading-snug">Daniel Brunsdon</h1>
              <p className="text-[13px] leading-snug text-neutral-400">
                Product + DevRel + Growth
              </p>
            </div>
          </div>
        </header>

        {/* Horizontal rule */}
        <hr className="border-neutral-200" />

        {/* Mobile nav */}
        <nav className="flex md:hidden gap-4 text-[13px] text-neutral-400 py-4 border-b border-neutral-200">
          <Link href="/" className="transition-all duration-200 hover:text-black hover:tracking-wide">About</Link>
          <Link href="/work" className="text-black">Work</Link>
          <Link href="/play" className="transition-all duration-200 hover:text-black hover:tracking-wide">Play</Link>
        </nav>

        {/* Container 2 + 3: Sidenav and Content */}
        <div className="flex-1 flex md:gap-16 md:overflow-hidden">
          {/* Container 2: Sidenav - fixed, no scroll (desktop only) */}
          <nav className="hidden md:flex md:flex-col gap-2 text-[13px] text-neutral-400 pt-6 md:w-[100px] flex-shrink-0">
            <Link href="/" className="transition-all duration-200 hover:text-black hover:tracking-wide">About</Link>
            <Link href="/work" className="text-black">Work</Link>
            <Link href="/play" className="transition-all duration-200 hover:text-black hover:tracking-wide">Play</Link>
          </nav>

          {/* Container 3: Content - scrolls within container */}
          <div className="flex-1 md:overflow-y-auto pt-6 pb-16">
            {/* Back link */}
            <Link
              href="/work"
              className="inline-flex items-center gap-1 text-[13px] text-neutral-400 hover:text-black transition-colors mb-8"
            >
              <span>←</span> Back to work
            </Link>

            {/* Header */}
            <header className="mb-8">
              <h2 className="text-[13px] font-semibold leading-snug mb-1">
                {entry.title}
              </h2>
              <p className="text-[13px] text-neutral-400">
                {entry.date} · {entry.discipline}
              </p>
            </header>

            {/* Description */}
            <p className="text-[13px] leading-relaxed mb-8">
              {entry.description}
            </p>

            {/* Content */}
            <div className="space-y-6 text-[13px] leading-relaxed">
              {entry.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Images */}
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

            {/* Links */}
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
          </div>
        </div>
      </div>
    </main>
  )
}
