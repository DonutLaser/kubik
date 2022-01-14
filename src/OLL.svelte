<script lang="ts">
    import OllSection from "./OLLSection.svelte";
    import patterns from "./data/patterns";
    import { onMount } from "svelte";
    import { Event, subscribe } from "./scripts/event-bus";
    import * as ollService from "./scripts/oll-service";

    const subscriptions: Function[] = [];
    onMount(() => {
        subscriptions.push(subscribe(Event.SearchRequested, onSearch));
    });

    function onSearch(pattern: number[][]) {
        const element = ollService.findPattern(pattern);

        if (element) {
            // @TODO (!important) if the section is closed, it should open
            // @TODO (!important) the actual pattern details should open
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
</script>

<div class="oll">
    {#each patterns as section}
        <OllSection title={section.title} id={section.id} patterns={section.patterns} />
    {/each}
</div>

<style>
    .oll {
        width: 100%;
        height: 100%;

        overflow-y: auto;
    }
</style>
