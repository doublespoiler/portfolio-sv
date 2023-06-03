<script>
  import { beforeUpdate } from "svelte";
  import { onMount } from "svelte";

  let postList;

  onMount(async () => {
    console.log("mounted")
    const res = await fetch(`/api/posts`);
    const posts = await res.json();
    postList = posts;
    console.log(`posts ${JSON.stringify(postList[1])}`)
  })
</script>


<ul>
  {#if postList}
  
  {#each postList.posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
    <p>tags: {post.meta.tags}</p>
    <p>{post.meta.summary}</p>
  {/each}
  {/if}
</ul>