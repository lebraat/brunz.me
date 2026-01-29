import { getEntries, getEntry, getAllSlugs, type EntryMeta, type Entry } from './mdx'

export type WorkEntry = EntryMeta
export type WorkEntryFull = Entry

export const workEntries = getEntries('work')

export function getWorkEntry(slug: string): WorkEntryFull | null {
  return getEntry('work', slug)
}

export function getAllWorkSlugs(): string[] {
  return getAllSlugs('work')
}
