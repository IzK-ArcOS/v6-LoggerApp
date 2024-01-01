<script lang="ts">
  import { ReadableStore } from "$types/writable";
  import Options from "./Content/Options.svelte";

  export let currentSource: ReadableStore<string>;
</script>

<div class="main-content">
  <Options {currentSource} />
</div>
