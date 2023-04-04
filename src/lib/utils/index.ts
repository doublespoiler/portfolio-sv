export const fetchMarkdownPosts = async () => {
  //vite matching wildcard/glob function
  //returns an object where each file's relative path is the key, and the value is the resolver function that loads the file contents as JS Promise
  const allPostFiles = import.meta.glob('/src/routes/blog/posts/*.md') 
  const iterablePostFiles = Object.entries(allPostFiles)
  
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = "/blog" + path.slice(22, -3)
      console.log(postPath)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )

  return allPosts
}