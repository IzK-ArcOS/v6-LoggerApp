<script lang="ts">
  import { CurrentSource } from "$apps/LoggerApp/ts/types";
  import { FolderIcon } from "$ts/images/filesystem";

  export let currentSource: CurrentSource;
  export let source: string;

  function select() {
    $currentSource = source;
  }
</script>

<button
  class="source-option"
  class:selected={$currentSource == source}
  on:click={select}
  title={source}
>
  <img src={FolderIcon} alt="" />
  <span>{source}</span>
</button>
