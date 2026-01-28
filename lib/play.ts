export interface PlayEntry {
  slug: string
  title: string
  date: string
  discipline: string
  description: string
  content: string[]
  images?: {
    src: string
    alt: string
    caption?: string
  }[]
  links?: {
    label: string
    href: string
  }[]
}

export const playEntries: PlayEntry[] = [
  {
    slug: 'example-project',
    title: 'Example Project',
    date: '2024',
    discipline: 'Side project',
    description: 'A placeholder for your play projects.',
    content: [
      'Add your personal projects, experiments, and creative explorations here.',
    ],
  },
]

export function getPlayEntry(slug: string): PlayEntry | undefined {
  return playEntries.find((entry) => entry.slug === slug)
}

export function getAllPlaySlugs(): string[] {
  return playEntries.map((entry) => entry.slug)
}
