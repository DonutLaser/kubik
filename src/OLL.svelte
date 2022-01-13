<script lang="ts">
    import OllSection from "./OLLSection.svelte";
    import patterns from "./data/patterns";

    console.log(patterns);
</script>

<div class="oll">
    {#each patterns as section}
        <OllSection title={section.title} patterns={section.patterns} />
    {/each}
</div>

<style>
    .oll {
        width: 100%;
        height: 100%;

        overflow-y: auto;
    }
</style>
