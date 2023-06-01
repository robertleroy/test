<script>
	import Sortable from 'sortablejs';
  import { onMount, tick } from 'svelte';
  import { savedLocations, sortOrder } from '$lib/store';
  import Popup from '$lib/components/Popup.svelte';

  let sortable1, element1, selectedItem;

  async function setOrder() {
		await tick();
		$sortOrder = (sortable1.toArray());
    // $store.sortOrder1 = sortOrder1;
	}
  
  async function deleteItem(id) {
    // console.log("deleteItem", id);
    $savedLocations = $savedLocations.filter(el => el.id !== id);
    $sortOrder = $sortOrder.filter(el => el !== id);
    // await tick();
    // setOrder();

  }
  
  onMount(() => {
    sortable1 = Sortable.create(element1, {
      animation: 300,
      touchStartThreshold: 3,
      ghostClass: "ghostClass",
      direction: "vertical",
      store: {
        get: function () { return $sortOrder; },
        set: function () { setOrder(); },
      },
    });
  });
</script>

<div class="dragzone" bind:this={element1} >
  {#each $savedLocations as item (item.id)}
  <div class="item" data-id={item.id} on:keypress on:click={() => selectedItem = item}>
    <div class="handle">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path fill="currentColor" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg> -->

      &vellip;&vellip;
    </div>
    <div class="city_state">{item.id}: {item.city}, {item.region}</div>
    <Popup on:delete={deleteItem(item.id)}/>
  </div>
  {/each}
</div>

<br>

<div class="sortOrder">sortOrder: {$sortOrder}</div>
<div class="selectedItem">selectedItem: {selectedItem?.city ?? ""}</div>

<style lang="postcss">
  .dragzone {
    width: max-content;
    background: gainsboro;
    border-radius: 0.5rem;
    overflow: hidden;
  }
  .item {
    display: flex;
    gap: 0 1ch;
    align-items: center;
    cursor: grab;
    padding: 0.5rem ;
    background-color: #fff;
    /* border-bottom: 1px solid #cccccc6f; */
    box-shadow: inset 0 -1px 0 #cccccc6f;
  }
  /* .item:not(:last-of-type) {
    box-shadow: inset 0 -1px 0 #cccccc6f;
  } */
  .city_state {
    flex: 1;
    min-width: 20rem;
  }
  .handle {
    cursor: move;
  }
  
  /* svg {
    height: 1.5rem;
    width: 1.5rem;
    font-size: 1em;
    vertical-align: top;
  } */
</style>
