<script lang="ts">
  import { FolderIcon } from "$ts/images/filesystem";
  import { ReadableStore } from "$types/writable";

  export let currentSource: ReadableStore<string>;
  export let source: string;

  function select() {
    $currentSource = source;
  }
</script>

<button
  class="source-option"
  class:selected={$currentSource == source}
  on:click={select}
>
  <img src={FolderIcon} alt="" />
  <span>{source}</span>
</button>
