import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDirectory = path.join(process.cwd(), 'content')

export interface EntryMeta {
  slug: string
  title: string
  date: string
  discipline: string
  description: string
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

export interface Entry extends EntryMeta {
  content: string
}

export function getEntries(type: 'work' | 'play'): EntryMeta[] {
  const dir = path.join(contentDirectory, type)

  if (!fs.existsSync(dir)) {
    return []
  }

  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'))

  const entries = files.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    const filePath = path.join(dir, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      title: data.title || slug,
      date: data.date || '',
      discipline: data.discipline || '',
      description: data.description || '',
      images: data.images,
      links: data.links,
    } as EntryMeta
  })

  return entries
}

export function getEntry(type: 'work' | 'play', slug: string): Entry | null {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    discipline: data.discipline || '',
    description: data.description || '',
    images: data.images,
    links: data.links,
    content,
  }
}

export function getAllSlugs(type: 'work' | 'play'): string[] {
  const dir = path.join(contentDirectory, type)

  if (!fs.existsSync(dir)) {
    return []
  }

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}
