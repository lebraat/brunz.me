import { getEntries, getEntry, getAllSlugs, type EntryMeta, type Entry } from './mdx'

export type PlayEntry = EntryMeta
export type PlayEntryFull = Entry

export const playEntries = getEntries('play')

export function getPlayEntry(slug: string): PlayEntryFull | null {
  return getEntry('play', slug)
}

export function getAllPlaySlugs(): string[] {
  return getAllSlugs('play')
}
