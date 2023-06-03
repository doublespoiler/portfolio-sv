import { fetchMarkdownPosts } from '$lib/utils/fetchAllMarkdownPosts'
import { json } from '@sveltejs/kit' //json helper converts to json and sets headers

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts()

  const sortedPosts = allPosts.sort((a, b) => {
    return Date.parse(b.meta.date) - Date.parse(a.meta.date); //sort by descending date
  })

  return json(sortedPosts)
}