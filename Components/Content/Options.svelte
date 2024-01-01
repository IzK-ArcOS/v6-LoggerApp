<script lang="ts">
  import { ReadableStore } from "$types/writable";
  import Filter from "./Options/Filter.svelte";

  export let currentSource: ReadableStore<string>;
</script>

<div class="options">
  <div class="current-source">{$currentSource}</div>
  <div class="sep" />
  <Filter />
</div>
