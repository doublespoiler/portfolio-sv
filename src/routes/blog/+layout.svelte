<script>
  import Header from '$lib/components/Header.svelte';
  import Nav from '$lib/components/Nav.svelte';

</script>


<style>
  .article-wrapper{
    max-width: 50ch;
    margin: 0 auto;

  }
  aside{
    padding: 2rem;
    background: #fff;
    overflow-y: scroll;
    min-height: inherit;
    box-sizing: border-box;
  }

  @media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) {
    aside{ display: none;}
  }

  .blog{
    display: flex;
    
  }

</style>

<div class="blog">
  <div class="article-wrapper">
    <slot />
  </div>
</div>


