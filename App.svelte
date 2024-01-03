<script lang="ts">
  import { Store } from "$ts/writable";
  import { onMount } from "svelte";
  import Content from "./Components/Content.svelte";
  import SideBar from "./Components/SideBar.svelte";
  import "./css/main.css";
  import { LoggerRuntime } from "./ts/runtime";
  import { CurrentSource, GroupedBySource } from "./ts/types";

  export let runtime: LoggerRuntime;

  let store: GroupedBySource = new Map([]);
  let currentSource: CurrentSource = Store("*");

  onMount(() => {
    runtime.groups.subscribe((v) => {
      store = v;
    });
  });
</script>

{#if store && runtime}
  <SideBar {store} {currentSource} />
  <Content {currentSource} {runtime} />
{/if}
