<script lang="ts">
  import { FilterCaptions, FilterLevels, LogItemIcons } from "$apps/LoggerApp/ts/store";
  import { FilterLevel } from "$apps/LoggerApp/ts/types";

  export let selectedLevel: FilterLevel;
</script>

<div class="filter-options">
  <button
    class="material-icons-round none"
    on:click={() => (selectedLevel = "all")}
    class:suggested={selectedLevel == "all"}
  >
    select_all
  </button>
  {#each FilterLevels as level}
    <button
      class="option level-{LogItemIcons[level]}"
      on:click={() => (selectedLevel = level)}
      class:suggested={selectedLevel == level}
    >
      {FilterCaptions.get(level)}
    </button>
  {/each}
</div>
