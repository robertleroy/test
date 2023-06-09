<script>
  import Sortable from "sortablejs";
  import { onMount, tick } from "svelte";
  import { store } from '$lib/store';
  import Popup from "$lib/components/Popup.svelte";

  let title = 'Sortable Todo List:';
  let newItem = '';
  let sortable_el, drag_list, selectedItem;
  let debug = false;

  async function sort_order() {
    await tick();
    $store.order = sortable_el.toArray();
  }

  async function addItem() {
    if ( newItem.length < 3 ) { return }
    
    reorderList();
		await tick();
    
    const dt = Date.now();
    const newObj = {
      id: dt.toString(36),
      title: newItem,
      completed: false,
      created: dt,
      updated: dt,
    };
    newItem = "";

    $store.list = [...$store.list, newObj];
    $store.order = [...$store.order, newObj.id];
  }

  async function deleteItem(id) {
    $store.list = $store.list.filter((el) => el.id !== id);
    $store.order = $store.order.filter((el) => el !== id);
    reorderList();
  }

  function reorderList() {
		let arr = [];
		for (let i = 0; i < $store.order.length; i++) {
			const obj = $store.list.find(el => el?.id === $store.order[i])
			arr.push(obj);
		} 
		$store.list = [...arr];
	}

  onMount(() => {
    sortable_el = Sortable.create(drag_list, {
      animation: 300,
      touchStartThreshold: 3,
      filter: "input:focus",
			preventOnFilter: false,
      ghostClass: "ghostClass",
      direction: "vertical",
      store: {
        get: function () {
          return $store.order;
        },
        set: function () {
          sort_order();
        },
      },
    });
  });
</script>

<div class='header'>
  <!-- <div class="title" style:font-size="1rem">
    {title}
  </div> -->

  <div class="newItem">
    <input type="text" placeholder="new item ..."
      bind:value={newItem} on:change={addItem} />
  </div>

  <div class="icon" style:font-size="1.5rem">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0z"/>
      <path d="M3 10h11v2H3zM3 6h11v2H3zM3 14h7v2H3zM20.59 11.93l-4.25 4.24-2.12-2.12-1.41 1.41L16.34 19 22 13.34z"/>
    </svg>
  </div>
</div>



<div class="dragzone">
  {#if $store.list?.length}
    <div bind:this={drag_list}>
      {#each $store.list as item (item.id)}
        <div
          class="item"
          data-id={item.id}
          on:keypress
          on:click={() => {
            selectedItem = item;
            console.log(item);
          }}
        >
          <div class="handle">&vellip;&vellip;</div>

          <input type="checkbox" bind:checked={item.completed}>

          <input type="text" bind:value={item.title}>

          <Popup on:delete={deleteItem(item.id)} />
        </div>
      {/each}
    </div>
  {:else}
    <div
      style="text-align: center; line-height: 2.5; font-variant: small-caps; opacity: 0.6"
    >
      list
    </div>
  {/if}
</div>



{#if debug}
<footer>
  <div class="flex">
    <div class="items">
      <h6>List</h6>
      {#each $store.list as item}
      <div>{item.id}: {item.completed ? '✔' : '⋯'} {item.title}</div>
      {/each}
    </div>

    <div class="order">
      <h6>Order</h6>
      {#each $store.order as item}
      <div>{item}</div>
      {/each}
    </div>
  </div>
</footer>
{/if}


<style lang='postcss'>
  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 0 4rem;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  
  .dragzone {
    width: max-content;
    background: hsl(0, 0%, 91%);
    border-radius: 0.5rem;
    overflow: hidden;
    width: 100%;
    max-width: 500px;
    min-height: 2.5em;
    margin: 0 auto;
  }
  .item {
    display: flex;
    gap: 0 1rem;
    align-items: center;
    cursor: default;
    padding: 0.5rem;
    background-color: #fff;
    box-shadow: inset 0 -1px 0 #cccccc6f;
  }
  [type="text"]:focus {
    /* outline: initial; */
    /* outline-color: hsl(153,48%,47%); */
    outline: 1px solid hsl(153,48%,47%);
  }
  .item [type="text"] {
    flex: 1;
    outline: none;
    border: none;
    border-radius: 0;
  }
  .item [type="text"]:focus {
    box-shadow: 0 2px 0 hsl(153,48%,47%);
  }
  .handle {
    cursor: move;
  }
  :global(.item.ghostClass) {
    background: hsl(0, 0%, 96%) ;
  }
  footer {
    margin-top: 4rem;
    .flex {
      display: flex;
      justify-content: space-around;
      /* align-items: center; */
      gap: 0 2rem;
    }
  }
  .icon { display: none; }
  svg {
    height: 1.5em;
    width: 1.5em;
    font-size: 1em;
    vertical-align: top;
  }
</style>