import PageLayout from '@/components/PageLayout'

export default function Home() {
  return (
    <PageLayout activeNav="about">
      <div className="space-y-6 text-[13px] leading-relaxed">
        <p>
          I am a Product and DevRel leader building human.tech, and previously worked at Gitcoin and Twitter.
        </p>

        <p>
          From developer ecosystems around public conversation to privacy-preserving identity and Web3 onboarding—I keep ending up at the same question: how do we build infrastructure that serves real humans without gatekeeping access or sacrificing privacy?
        </p>

        <p>
          When I'm not working, I'm usually vibe coding, making music and visual art, or spending time outdoors.
        </p>

        <ul className="space-y-4 pt-4">
          <li>
            <a href="mailto:dan.brunsdon@gmail.com" className="group block">
              <span className="font-semibold group-hover:underline">Email</span>
              <p className="text-neutral-400">dan.brunsdon@gmail.com</p>
            </a>
          </li>
          <li>
            <a href="https://x.com/lebraat" target="_blank" rel="noopener noreferrer" className="group block">
              <span className="font-semibold group-hover:underline">Twitter</span>
              <p className="text-neutral-400">@lebraat</p>
            </a>
          </li>
          <li>
            <a href="https://t.me/lebraat" target="_blank" rel="noopener noreferrer" className="group block">
              <span className="font-semibold group-hover:underline">Telegram</span>
              <p className="text-neutral-400">@lebraat</p>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/danbrunsdon/" target="_blank" rel="noopener noreferrer" className="group block">
              <span className="font-semibold group-hover:underline">LinkedIn</span>
              <p className="text-neutral-400">/in/danbrunsdon</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/lebraat" target="_blank" rel="noopener noreferrer" className="group block">
              <span className="font-semibold group-hover:underline">GitHub</span>
              <p className="text-neutral-400">@lebraat</p>
            </a>
          </li>
        </ul>
      </div>
    </PageLayout>
  )
}
