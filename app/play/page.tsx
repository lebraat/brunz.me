import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { playEntries } from '@/lib/play'

export default function Play() {
  return (
    <PageLayout activeNav="play">
      <ul className="space-y-5">
        {playEntries.map((item) => (
          <li key={item.slug}>
            <Link href={`/play/${item.slug}`} className="group block">
              <span className="text-[13px] font-semibold group-hover:underline">{item.title}</span>
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
