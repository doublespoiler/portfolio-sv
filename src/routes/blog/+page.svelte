<script>
  export let data
</script>

<style>
  #blog{
    max-width: 70ch;
    margin: auto;
  }
</style>
  

  <h1>Blog</h1>
  <ul>
    {#each data.posts as post}
      <li>
        <a href={post.path}>
          {post.meta.title}
        </a>
        <br />
        Published {post.meta.date}
        <br />
        tags: {post.meta.tags}
      </li>
    {/each}
  </ul>


