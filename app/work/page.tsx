import Link from 'next/link'
import Image from 'next/image'
import { workEntries } from '@/lib/work'

export default function Work() {
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
            <ul className="space-y-5">
              {workEntries.map((item) => (
                <li key={item.slug}>
                  <Link href={`/work/${item.slug}`} className="group block">
                    <span className="text-[13px] font-semibold group-hover:underline">{item.title}</span>
                    <p className="text-[13px] text-neutral-400">
                      {item.date} · {item.discipline}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
