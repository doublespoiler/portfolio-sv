<style>
  header {
    padding: 1rem 3rem;
    background: lightskyblue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    height: 2vh;
  }

  @media only screen and (max-width: 480px)  { 
    header{
      min-width: 100vw;
    }
    
  }

  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    gap: 1rem;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  </style>

<!-- COMPONENT Header.svelte -->
<header>
  <a href="/">home</a>

  <nav>

    <ul>
      <li>
        <a href="/blog">blog</a>
      </li>
      <li>
        <a href="/about">about</a>
      </li>

    </ul>
  </nav>
</header>