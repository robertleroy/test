<script>
  import Sortable from "sortablejs";
  import { onMount, tick } from "svelte";
  import { savedLocations, sortOrder } from "$lib/store";
  import Popup from "$lib/components/Popup.svelte";

  let sortable, draglist, selectedItem;

  // sort_order();

  async function sort_order() {
    // if (!$sortOrder.length) return;
    await tick();
    $sortOrder = sortable.toArray();
  }

  function reorderList() {
    let arr = [];
    for (let i = 0; i < $sortOrder.length; i++) {
      const obj = $savedLocations.find((el) => el.id === $sortOrder[i]);
      arr.push(obj);
    }
    $savedLocations = [...arr];
  }

  async function deleteItem(id) {
    $savedLocations = $savedLocations.filter((el) => el.id !== id);
    $sortOrder = $sortOrder.filter((el) => el !== id);
    reorderList();
  }

  onMount(() => {
    sortable = Sortable.create(draglist, {
      animation: 300,
      touchStartThreshold: 3,
      ghostClass: "ghostClass",
      direction: "vertical",
      store: {
        get: function () {
          return $sortOrder;
        },
        set: function () {
          sort_order();
        },
      },
    });
  });
</script>

<div class="dragzone">
  {#if $savedLocations?.length}
    <div bind:this={draglist}>
      {#each $savedLocations as item (item.id)}
        <div
          class="item"
          data-id={item.id}
          on:keypress
          on:click={() => {
            selectedItem = item;
            console.log(item.city);
          }}
        >
          <div class="handle">&vellip;&vellip;</div>
          <div class="city_state">{item.city}, {item.region}</div>
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

<br />

<!-- <div class="sortOrder">sortOrder: {$sortOrder}</div>
<div class="selectedItem">selectedItem: {selectedItem?.city ?? ""}</div> -->

<style lang="postcss">
  .dragzone {
    width: max-content;
    background: hsl(0, 0%, 91%);
    border-radius: 0.5rem;
    overflow: hidden;
    width: 500px;
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
  .city_state {
    flex: 1;
  }
  .handle {
    cursor: move;
  }
  :global(.item.ghostClass) {
    background: hsl(0, 0%, 96%) ;
  }
</style>
