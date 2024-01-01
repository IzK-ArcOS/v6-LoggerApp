<script lang="ts">
  import { LogItem } from "$types/console";
  import { ReadableStore } from "$types/writable";
  import Source from "./SideBar/Source.svelte";

  export let currentSource: ReadableStore<string>;
  export let store: Map<string, LogItem[]>;
</script>

<div class="sidebar">
  {#each [...store] as [source]}
    <Source {source} {currentSource} />
  {/each}
</div>
