<script lang="ts">
  import { AppsIcon } from "$ts/images/general";
  import { CurrentSource, GroupedBySource } from "../ts/types";
  import Source from "./SideBar/Source.svelte";

  export let currentSource: CurrentSource;
  export let store: GroupedBySource;
</script>

<div class="sidebar">
  <button
    class="source-option"
    class:selected={$currentSource == "*"}
    on:click={() => ($currentSource = "*")}
  >
    <img src={AppsIcon} alt="" />
    <span>All Logs</span>
  </button>

  {#each [...store] as [source]}
    <Source {source} {currentSource} />
  {/each}
</div>
