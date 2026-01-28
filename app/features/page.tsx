import Link from 'next/link'
import Image from 'next/image'

const features = [
  {
    title: 'Press',
    items: [
      { label: 'Design interview on Sidebar', href: '#' },
      { label: 'Featured in Webflow showcase', href: '#' },
      { label: 'Podcast appearance on Design Details', href: '#' },
    ],
  },
  {
    title: 'Writing',
    items: [
      { label: 'Designing for delight', href: '#' },
      { label: 'The future of interaction design', href: '#' },
      { label: 'Building design systems that scale', href: '#' },
    ],
  },
  {
    title: 'Talks',
    items: [
      { label: 'Config 2024 – Micro-interactions that matter', href: '#' },
      { label: 'Local meetup – Design tokens in practice', href: '#' },
    ],
  },
  {
    title: 'Awards',
    items: [
      { label: 'Awwwards Site of the Day', href: '#' },
      { label: 'CSS Design Awards', href: '#' },
    ],
  },
]

export default function Features() {
  return (
    <main className="h-screen flex flex-col px-6">
      <div className="max-w-[900px] w-full mx-auto flex flex-col h-full">
        {/* Container 1: Header - spans full width */}
        <header className="pt-12 md:pt-16 pb-6">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <Link href="/" className="block w-[38px] h-[38px] flex-shrink-0">
              <Image
                src="/avatar.png"
                alt="brunz"
                width={38}
                height={38}
                className="rounded-full object-cover"
              />
            </Link>

            {/* Name and Title */}
            <div>
              <h1 className="text-[15px] font-semibold leading-snug">brunz</h1>
              <p className="text-[15px] leading-snug text-neutral-400">
                DevRel & Product Lead
              </p>
            </div>
          </div>
        </header>

        {/* Horizontal rule */}
        <hr className="border-neutral-200" />

        {/* Container 2 + 3: Sidenav and Content */}
        <div className="flex-1 flex md:gap-16 overflow-hidden">
          {/* Container 2: Sidenav - fixed, no scroll */}
          <nav className="hidden md:flex md:flex-col gap-2 text-[15px] text-neutral-400 pt-6 md:w-[200px] flex-shrink-0">
            <Link href="/" className="hover:text-black transition-colors">About</Link>
            <Link href="/work" className="hover:text-black transition-colors">Work</Link>
            <Link href="/connect" className="hover:text-black transition-colors">Connect</Link>
            <Link href="/features" className="text-black">Features</Link>
          </nav>

          {/* Mobile nav */}
          <nav className="flex md:hidden gap-4 text-[15px] text-neutral-400 py-4">
            <Link href="/" className="hover:text-black transition-colors">About</Link>
            <Link href="/work" className="hover:text-black transition-colors">Work</Link>
            <Link href="/connect" className="hover:text-black transition-colors">Connect</Link>
            <Link href="/features" className="text-black">Features</Link>
          </nav>

          {/* Container 3: Content - scrolls within container */}
          <div className="flex-1 overflow-y-auto pt-6 pb-16">
            <div className="space-y-10 text-[15px]">
              {features.map((section) => (
                <div key={section.title}>
                  <h2 className="font-semibold mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-neutral-600 hover:text-black hover:underline transition-colors"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
