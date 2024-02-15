<script lang="ts">
  import { ReadableStore } from "$types/writable";
  import { onMount } from "svelte";
  import { LoggerRuntime } from "../ts/runtime";
  import { FilterLevel } from "../ts/types";
  import List from "./Content/List.svelte";
  import Options from "./Content/Options.svelte";
  import Titlebar from "$state/Desktop/Components/ProcessRenderer/Window/Titlebar.svelte";

  export let currentSource: ReadableStore<string>;
  export let runtime: LoggerRuntime;

  let selectedLevel: FilterLevel = "all";

  onMount(() => {
    runtime.process.handler.dispatch.subscribe<string>(runtime.pid, "change-source", (source) => {
      $currentSource = source;
    });

    const args = runtime.process.args;

    if (args.length < 2) return;

    const [level, source] = runtime.process.args;

    if (!level || typeof source !== "string") return;

    selectedLevel = level as FilterLevel;
    currentSource.set(source);
  });
</script>

<div class="main-content">
  <Titlebar pid={runtime.pid} app={runtime.appMutator} />
  <Options {currentSource} bind:selectedLevel />
  <div class="log-list-wrapper">
    <List {currentSource} {selectedLevel} />
  </div>
</div>
