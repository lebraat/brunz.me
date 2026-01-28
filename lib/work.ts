export interface WorkEntry {
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

export const workEntries: WorkEntry[] = [
  {
    slug: 'interaction-prototypes',
    title: 'Interaction prototypes',
    date: '2024–present',
    discipline: 'Interaction design',
    description: 'A collection of interaction prototypes exploring motion, gestures, and micro-interactions.',
    content: [
      'These prototypes explore various interaction patterns and motion design principles. Each prototype focuses on a specific interaction challenge and attempts to solve it in a delightful way.',
      'The work spans gesture-based interfaces, physics-based animations, and novel navigation patterns.',
    ],
    images: [
      { src: '/work/prototypes-1.png', alt: 'Prototype example', caption: 'Gesture-based navigation prototype' },
    ],
  },
  {
    slug: 'app-icons',
    title: 'App icon design',
    date: '2020–present',
    discipline: 'iOS and macOS app icons',
    description: 'Icon design work for various iOS and macOS applications.',
    content: [
      'App icons are often the first impression users have of an application. These icons aim to be memorable, recognizable at any size, and true to the app\'s purpose.',
      'Each icon goes through extensive iteration, testing across different backgrounds and sizes to ensure clarity and impact.',
    ],
  },
  {
    slug: 'explorations',
    title: 'Explorations',
    date: '2020–present',
    discipline: 'Misc. creative exercises',
    description: 'Experimental design work and creative explorations.',
    content: [
      'A collection of experimental work that doesn\'t fit neatly into other categories. These explorations help push creative boundaries and discover new techniques.',
    ],
  },
  {
    slug: 'linear-navigation',
    title: 'Linear Navigation',
    date: '2025',
    discipline: 'Product and interaction design',
    description: 'Redesigning the navigation experience for Linear.',
    content: [
      'Linear\'s navigation needed to scale with growing teams and increasingly complex workspaces while maintaining the speed and keyboard-first experience users love.',
      'This project involved extensive prototyping and user research to find the right balance between power and simplicity.',
    ],
  },
  {
    slug: 'linear-search',
    title: 'Linear Search',
    date: '2025',
    discipline: 'Product and interaction design',
    description: 'Building a powerful, fast search experience for Linear.',
    content: [
      'Search is one of the most used features in Linear. This redesign focused on making search faster, more intuitive, and more powerful.',
      'Key improvements include instant results, better filtering, and keyboard-optimized interactions.',
    ],
  },
  {
    slug: 'linear-documents',
    title: 'Linear Documents',
    date: '2024',
    discipline: 'Product and interaction design',
    description: 'Introducing documents and long-form content to Linear.',
    content: [
      'Linear Documents brings rich text editing and documentation capabilities directly into the Linear workflow.',
      'The challenge was integrating a full document editor while maintaining Linear\'s minimal, focused aesthetic.',
    ],
  },
  {
    slug: 'linear-mobile',
    title: 'Linear Mobile v1.0',
    date: '2024',
    discipline: 'Product design',
    description: 'Designing Linear\'s first mobile application.',
    content: [
      'Bringing Linear to mobile required rethinking many interactions that were designed for keyboard and mouse.',
      'The mobile app focuses on the most common use cases: triaging issues, quick updates, and staying informed on the go.',
    ],
  },
  {
    slug: 'linear-renders',
    title: 'Linear homepage renders',
    date: '2024',
    discipline: '3D rendering',
    description: '3D renders and visual assets for Linear\'s homepage.',
    content: [
      'Creating compelling visual assets that communicate Linear\'s product value while maintaining brand consistency.',
      'These renders were used across the marketing site and various campaign materials.',
    ],
  },
  {
    slug: 'github-copilot',
    title: 'GitHub Copilot',
    date: '2024',
    discipline: 'Product and interaction design',
    description: 'Design work on GitHub Copilot features.',
    content: [
      'GitHub Copilot is transforming how developers write code. This work focused on the interaction patterns and user experience of AI-assisted coding.',
      'Key challenges included making AI suggestions feel natural and non-intrusive while being easily accessible.',
    ],
  },
  {
    slug: 'github-achievements',
    title: 'GitHub Achievements',
    date: '2023',
    discipline: 'Interaction design',
    description: 'Designing the achievements system for GitHub profiles.',
    content: [
      'GitHub Achievements celebrate developer milestones and contributions. The design needed to feel rewarding without being distracting.',
      'Each achievement badge was carefully crafted to be visually distinct while maintaining a cohesive system.',
    ],
  },
  {
    slug: 'github-shortcuts',
    title: 'GitHub Navigation Shortcuts',
    date: '2022',
    discipline: 'Product design',
    description: 'Improving keyboard navigation across GitHub.',
    content: [
      'Power users rely heavily on keyboard shortcuts. This project expanded and systematized GitHub\'s keyboard navigation.',
      'The goal was to create a consistent, discoverable shortcut system that scales across all of GitHub\'s features.',
    ],
  },
]

export function getWorkEntry(slug: string): WorkEntry | undefined {
  return workEntries.find((entry) => entry.slug === slug)
}

export function getAllWorkSlugs(): string[] {
  return workEntries.map((entry) => entry.slug)
}
