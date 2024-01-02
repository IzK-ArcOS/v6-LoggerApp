<script lang="ts">
  import { Store } from "$ts/writable";
  import { LogItem } from "$types/console";
  import { onMount } from "svelte";
  import Content from "./Components/Content.svelte";
  import SideBar from "./Components/SideBar.svelte";
  import "./css/main.css";
  import { LoggerRuntime } from "./ts/runtime";

  export let runtime: LoggerRuntime;

  let store = new Map<string, LogItem[]>([]);
  let currentSource = Store<string>();

  onMount(() => {
    runtime.groups.subscribe((v) => (store = v));
  });
</script>

{#if store}
  <SideBar {store} {currentSource} />
  <Content {currentSource} />
{/if}
