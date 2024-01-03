<script lang="ts">
  import { CurrentSource, FilterLevel } from "$apps/LoggerApp/ts/types";
  import { LogStore } from "$ts/console";
  import { LogItem } from "$types/console";
  import LogItemSvelte from "./List/LogItem.svelte";

  export let currentSource: CurrentSource;
  export let selectedLevel: FilterLevel;

  let items: LogItem[] = [];

  LogStore.subscribe((v) => {
    items = v.sort((a, b) => b.timestamp - a.timestamp);
  });
</script>

<table class="log-list">
  <thead>
    <tr>
      <th class="icon"></th>
      <th class="source">Source</th>
      <th class="timestamp">Timestamp</th>
      <th class="message">Message</th>
    </tr>
  </thead>
  <tbody>
    {#each items as item}
      {#if (item.level == selectedLevel || selectedLevel == "all") && (item.source == $currentSource || $currentSource == "*")}
        <LogItemSvelte {item} />
      {/if}
    {/each}
  </tbody>
</table>
