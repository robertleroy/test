<script>
  import { savedLocations, sortOrder } from '$lib/store';
  import "./app.css";
  let title = "Home", newItem = "";
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  function addItem() {
    if ( newItem.length < 3 ) { return }
    console.log('addItem', newItem);
    const newObj = {
      id: Date.now().toString(36),
      city: newItem,
      region: "USA",
      countryCode: "US",
      lat: 40.504123,
      lon: -74.516532,
    };
    $savedLocations = [...$savedLocations, newObj]
    $sortOrder = [...$sortOrder, newObj.id]
    newItem = "";
  }

  // onMount(() => {});
</script>

<header class="">
  <div class="flex">
    <div class="title">
      <a href="/">{title}</a>
    </div>

    <div class="newItem">
      <input type="text" placeholder="new item ..."
        bind:value={newItem} on:change={addItem} />
        {newItem.length < 3}
    </div>

    <nav>
      {#each routes as route}
        <div class="route">
          <a href={route.path}>{route.name}</a>
        </div>
      {/each}
    </nav>
  </div>
</header>

<main>
  <div class="router"><slot /></div>
</main>

<style lang="postcss">
  header {
    border-bottom: 1px solid #ccc;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0 1rem;
      padding: 0.5rem 2rem;
      max-width: var(--max-width);
      margin: 0 auto;
    }
    /* a {  color: inherit;
       &:not(:hover:not(:active)) {
        text-decoration: none;
      }
    } */
    nav {
      display: flex;
      align-items: baseline;
      gap: 0 1rem;
    }
  } /* header */

  .router {
    padding: 0.5rem 2rem;
    max-width: var(--max-width);
    margin: 0 auto;
  }
</style>
