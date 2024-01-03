<script lang="ts">
  import { FilterLevel } from "$apps/LoggerApp/ts/types";
  import { ReadableStore } from "$types/writable";
  import Filter from "./Options/Filter.svelte";

  export let currentSource: ReadableStore<string>;
  export let selectedLevel: FilterLevel;
</script>

<div class="options">
  <div class="current-source">
    {$currentSource == "*" ? "All Log Items" : $currentSource}
  </div>
  <div class="sep" />
  <Filter bind:selectedLevel />
</div>
