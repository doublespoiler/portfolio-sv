<!-- src/routes/[slug]/+page.svelte -->
<script>
  export let data
  const { title, date, Content, tags} = data
  console.log(`Data ${JSON.stringify(data)}`)
</script>

  <article>
    <h1>{title}</h1>
    <p>Published: {date}</p>
    <p>Tags: {tags}</p>
    <Content />
  </article>

