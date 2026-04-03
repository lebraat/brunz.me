import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const resumesDirectory = path.join(process.cwd(), 'content', 'resumes')

export interface ResumeMeta {
  id: string
  title: string
  role: string
  company: string
  date: string
}

export interface Resume extends ResumeMeta {
  content: string
}

export function getResume(id: string): Resume | null {
  const filePath = path.join(resumesDirectory, `${id}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    id,
    title: data.title || id,
    role: data.role || '',
    company: data.company || '',
    date: data.date || '',
    content,
  }
}

export function getAllResumeIds(): string[] {
  if (!fs.existsSync(resumesDirectory)) {
    return []
  }

  return fs
    .readdirSync(resumesDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}
