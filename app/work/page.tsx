import Link from 'next/link'
import PageLayout from '@/components/PageLayout'
import { workEntries } from '@/lib/work'

export default function Work() {
  return (
    <PageLayout activeNav="work">
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
    </PageLayout>
  )
}
