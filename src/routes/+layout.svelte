<script>
  import { base } from '$app/paths';
  import { savedLocations, sortOrder } from '$lib/store';
  import { tick } from 'svelte';
  import "./app.css";

  let title = "Home"
  let newItem = "";
  const routes = [
    { name: "Home", path: "/" },
    { name: "Todos", path: "/todos" },
    { name: "About", path: "/about" },
  ];

  async function addItem() {
    if ( newItem.length < 3 ) { return }
    
    reorderList();
		await tick();
    
    const newObj = {
      id: Date.now().toString(36),
      city: newItem,
      region: "Fs",
      countryCode: "US",
      lat: 40.504123,
      lon: -74.516532,
    };
    newItem = "";

    $savedLocations = [...$savedLocations, newObj];
    $sortOrder = [...$sortOrder, newObj.id];
  }

  function reorderList() {
		let arr = [];
		for (let i = 0; i < $sortOrder.length; i++) {
			const obj = $savedLocations.find(el => el.id === $sortOrder[i])
			arr.push(obj);
		} 
		$savedLocations = [...arr];
	}

  // onMount(() => {});
</script>

<header class="">
  <div class="flex">
    <div class="title">
      <a href="{base}/">{title}</a>
    </div>

    <div class="newItem">
      <input type="text" placeholder="new item ..."
        bind:value={newItem} on:change={addItem} />
    </div>

    <nav>
      {#each routes as route}
        <div class="route">
          <a href="{base}{route.path}">{route.name}</a>
        </div>
      {/each}
    </nav>
  </div>
</header>

<main>
  <div class="router"><slot /></div>
</main>

<footer>
  <div style="display: flex;
              flex-direction: column;
              flex-wrap: wrap;
              gap: 0 1ch;">
    {#each $savedLocations as item (item.id)}
    <div class="">{item.city}</div>
    {/each}
  </div>

  <div>
    {$sortOrder}
  </div>
</footer>

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

  footer {
		background: #fff;
		padding: 1rem;
		position: fixed;
		bottom: 0;
		width: 100%;
		min-height: 8rem;

		display: flex;
/* 		justify-content: space-between; */
		/*     align-items: baseline; */
		gap: 0 40%;
	}
</style>
