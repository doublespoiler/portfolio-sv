<style>
  footer {
    padding: 1rem 3rem;
    background: lightskyblue;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    height: 2vh;

  }

  @media only screen and (max-width: 480px) { 
    footer{
      min-width: 100vw;
    }
    
  }

  p {
    margin: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  </style>

<!-- COMPONENT Header.svelte -->
<footer>
  <p><a href="/">home</a></p>
  <p><a href="#">back to top</a></p>
</footer>