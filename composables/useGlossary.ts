export function slugifyTerm(term: string) {
  return term
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function useGlossary() {
  return useAsyncData('glossary', () =>
    queryCollection('glossary').order('term', 'ASC').all()
  )
}