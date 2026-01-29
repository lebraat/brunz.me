import PageLayout from '@/components/PageLayout'

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
    <PageLayout activeNav="about">
      <div className="space-y-10 text-[13px]">
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
    </PageLayout>
  )
}
