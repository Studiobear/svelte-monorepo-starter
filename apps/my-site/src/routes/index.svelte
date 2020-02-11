<script>
  import { Counter } from 'my-svelte-component-library'
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 1em auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  h3 {
    text-align: center;
    font-size: 2em;
    font-weight: 700;
    margin: 3em 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  .component-container {
    text-align: center;
    padding: 2em;
    border: 1px solid #ccc;
    margin: 0 0 3em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
  <img alt="Borat" src="great-success.png" />
  <figcaption>HIGH FIVE!</figcaption>
</figure>

<h3>Local library component demo</h3>
<p>
  Our counter component from sample Svelte component Library from root dir:
  `/libs/my-svelte-component-library`
</p>
<div class="component-container">
  <Counter />
</div>

<p>
  <strong>
    Try editing this file (src/routes/index.svelte) to test live reloading.
  </strong>
</p>
