<script>
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import '$lib/styles/style.scss'
</script>


<div id="wrapper">

    <Header />

    <main>
      <slot />
    </main>

    <Footer />
</div>



