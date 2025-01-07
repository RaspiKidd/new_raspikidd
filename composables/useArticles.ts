const state = reactive({
    articles: [],
})

export function useArticles(){
    const storyblokApi = useStoryblokApi()

    async function fetchArticles() {
        const { data } = await storyblokApi.get('cdn/stories/', {
            version: useRoute().query._storyblok ? 'draft' : 'published',
            starts_with: 'articles/',
            resolve_relations: 'author',
            is_startpage: false,
        })
        
        state.articles = data.stories.map(article => ({
            ...article,
            content: {
                ...article.content,
                author: data.rels.find(({uuid}) => uuid === article.content.author),
            },
        }))
    }

    async function fetchArticleBySlug(slug: string) {
      try {
        const { data } = await storyblokApi.get('cdn/stories/', {
            version: useRoute().query._storyblok ? 'draft' : 'published',
            starts_with: 'articles/',
            by_slugs: '*/' + slug,
            resolve_relations: 'author',
            is_startpage: false,
        })
        const story = data.stories[0]
        story.content.author = data.rels.find(({ uuid }) => uuid === story.content.author)
        return story

      } catch (error) {
        console.error(error)
      } 
    }
    return {
        ...toRefs(state),
        fetchArticles,
        fetchArticleBySlug
    }
} 