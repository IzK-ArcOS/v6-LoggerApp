<script lang="ts">
  import { LogItemIcons } from "$apps/LoggerApp/ts/store";
  import { LogItem, LogLevel } from "$types/console";
  import dayjs from "dayjs";
  import { onMount } from "svelte";

  export let item: LogItem;
  let timestamp = "";
  let now = 0;

  onMount(() => {
    timestamp = dayjs(item.timestamp || 0).format("HH:mm:ss.mmm");

    setInterval(() => (now = new Date().getTime()));
  });
</script>

<tr class="log-item level-{item.level}" class:highlight={now && now < item.timestamp + 300}>
  <td class="icon">
    <img src={LogItemIcons[item.level]} alt={LogLevel[item.level]} />
  </td>
  <td class="source" title={item.source}>{item.source}</td>
  <td class="timestamp">{timestamp}</td>
  <td class="message" title={item.msg}><span>{item.msg}</span></td>
</tr>
