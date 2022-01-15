<script lang="ts">
    import OllShape from "./OLLShape.svelte";
    import type { Pattern } from "./scripts/types";

    export let title = "Title";
    export let id = "";
    export let patterns: Pattern[] = [];

    let showing = true;

    function onHideClick() {
        showing = !showing;
    }
</script>

<div class="oll-section" {id}>
    <div class="oll-section-header" class:with-border={!showing} on:click={onHideClick}>
        <div class="left">{title}</div>
    </div>
    {#if showing}
        <div class="oll-section-body">
            {#each patterns as pattern}
                <OllShape pattern={pattern.pattern} solution={pattern.solution} production={pattern.production} />
            {/each}
        </div>
    {/if}
</div>

<style>
    .oll-section {
        display: flex;
        flex-direction: column;

        width: 100%;
    }

    .oll-section-header {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        width: 100%;
        height: 42px;

        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;

        background-color: #444;
        color: #feb503;

        font-family: Consolas;
        font-size: 1rem;
        font-weight: 600;

        user-select: none;
    }

    .oll-section-header:hover {
        background-color: #4b4b4b;
        cursor: pointer;
    }

    .oll-section-header:active {
        background-color: #555;
    }

    .oll-section-header.with-border {
        border-bottom: 1px solid #333;
    }

    .oll-section-header .left {
        justify-content: flex-start;
    }

    .oll-section-body {
        flex: 1;

        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: auto;

        width: 100%;
        min-height: 320px;

        column-gap: 1rem;
        row-gap: 1rem;

        padding: 1rem;
    }
</style>
