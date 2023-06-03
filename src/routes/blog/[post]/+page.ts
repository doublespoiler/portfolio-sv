export async function load({ params }){
  const post = await import(`../posts/${params.post}.md`)
  const { title, date, tags } = post.metadata
  const Content = post.default
  return {
    Content,
    title,
    date,
    tags,
  }
}