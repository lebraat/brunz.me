import Link from 'next/link'
import Image from 'next/image'

const links = [
  {
    label: 'Twitter',
    href: 'https://x.com/lebraat',
    description: '@lebraat',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/danbrunsdon/',
    description: '/in/danbrunsdon',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/lebraat',
    description: '@lebraat',
  },
]

export default function Connect() {
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
            <Link href="/connect" className="text-black">Connect</Link>
          </nav>

          {/* Mobile nav */}
          <nav className="flex md:hidden gap-4 text-[15px] text-neutral-400 py-4">
            <Link href="/" className="hover:text-black transition-colors">About</Link>
            <Link href="/work" className="hover:text-black transition-colors">Work</Link>
            <Link href="/connect" className="text-black">Connect</Link>
          </nav>

          {/* Container 3: Content - scrolls within container */}
          <div className="flex-1 overflow-y-auto pt-6 pb-16">
            <div className="space-y-6 text-[15px]">
              <p className="leading-relaxed">
                Feel free to reach out if you'd like to collaborate, have a question,
                or just want to say hello.
              </p>

              <ul className="space-y-4 pt-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block"
                    >
                      <span className="font-semibold group-hover:underline">{link.label}</span>
                      <p className="text-neutral-400">{link.description}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
