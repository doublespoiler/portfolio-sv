<script>
  import Header from "$lib/components/Header.svelte";
  import '$lib/styles/style.css'
  export const prerender = true;
</script>

<Header />

<main>
  <slot />
</main>

<footer>Hello, I'm the footer.</footer>