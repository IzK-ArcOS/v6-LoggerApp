<script lang="ts">
  import { Store } from "$ts/writable";
  import Content from "./Components/Content.svelte";
  import SideBar from "./Components/SideBar.svelte";
  import "./css/main.css";
  import { LoggerRuntime } from "./ts/runtime";
  import { CurrentSource } from "./ts/types";

  export let runtime: LoggerRuntime;

  const { groups: store } = runtime;

  let currentSource: CurrentSource = Store("*");
</script>

{#if store && runtime}
  <SideBar store={$store} {currentSource} />
  <Content {currentSource} {runtime} />
{/if}
