import PageLayout from '@/components/PageLayout'

export default function Home() {
  return (
    <PageLayout activeNav="about">
      <div className="space-y-6 text-[13px] leading-relaxed">
        <p className="stagger-item">
          I am a Product and DevRel leader building human.tech, and previously worked at Gitcoin and Twitter.
        </p>

        <p className="stagger-item">
          From developer ecosystems around public conversation to privacy-preserving identity and Web3 onboarding—I keep ending up at the same question: how do we build infrastructure that serves real humans without gatekeeping access or sacrificing privacy?
        </p>

        <p className="stagger-item">
          When I'm not working, I'm usually vibe coding, making music and visual art, or spending time outdoors.
        </p>

        <ul className="space-y-4 pt-4">
          <li className="stagger-item">
            <a href="mailto:dan.brunsdon@gmail.com" className="liquid-glass-item group block w-fit">
              <span className="font-semibold underline decoration-neutral-200 underline-offset-2 decoration-2 transition-colors duration-200 group-hover:decoration-neutral-400">Email</span>
              <p className="text-neutral-400">dan.brunsdon@gmail.com</p>
            </a>
          </li>
          <li className="stagger-item">
            <a href="https://x.com/lebraat" target="_blank" rel="noopener noreferrer" className="liquid-glass-item group block w-fit">
              <span className="font-semibold underline decoration-neutral-200 underline-offset-2 decoration-2 transition-colors duration-200 group-hover:decoration-neutral-400">Twitter</span>
              <p className="text-neutral-400">@lebraat</p>
            </a>
          </li>
          <li className="stagger-item">
            <a href="https://t.me/lebraat" target="_blank" rel="noopener noreferrer" className="liquid-glass-item group block w-fit">
              <span className="font-semibold underline decoration-neutral-200 underline-offset-2 decoration-2 transition-colors duration-200 group-hover:decoration-neutral-400">Telegram</span>
              <p className="text-neutral-400">@lebraat</p>
            </a>
          </li>
          <li className="stagger-item">
            <a href="https://www.linkedin.com/in/danbrunsdon/" target="_blank" rel="noopener noreferrer" className="liquid-glass-item group block w-fit">
              <span className="font-semibold underline decoration-neutral-200 underline-offset-2 decoration-2 transition-colors duration-200 group-hover:decoration-neutral-400">LinkedIn</span>
              <p className="text-neutral-400">/in/danbrunsdon</p>
            </a>
          </li>
          <li className="stagger-item">
            <a href="https://github.com/lebraat" target="_blank" rel="noopener noreferrer" className="liquid-glass-item group block w-fit">
              <span className="font-semibold underline decoration-neutral-200 underline-offset-2 decoration-2 transition-colors duration-200 group-hover:decoration-neutral-400">GitHub</span>
              <p className="text-neutral-400">@lebraat</p>
            </a>
          </li>
        </ul>
      </div>
    </PageLayout>
  )
}
