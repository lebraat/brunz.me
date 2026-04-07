import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { playEntries } from '@/lib/play'

export default function Play() {
  return (
    <PageLayout activeNav="play">
      <ul className="space-y-5">
        {playEntries.map((item) => (
          <li key={item.slug} className="stagger-item">
            <Link
              href={`/play/${item.slug}`}
              className="liquid-glass-item group block w-fit"
            >
              <span className="text-[13px] font-semibold underline decoration-neutral-200 underline-offset-2 decoration-2 transition-colors duration-200 group-hover:decoration-neutral-400">
                {item.title}
              </span>
              <p className="text-[13px] text-neutral-400">
                {item.date} · {item.discipline}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </PageLayout>
  )
}
