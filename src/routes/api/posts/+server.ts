import { fetchMarkdownPosts } from '$lib/utils'
import { json } from '@sveltejs/kit' //json helper converts to json and sets headers

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts()

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date) //sort by descending date
  })

  return json(sortedPosts)
}