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
    <div class="oll-section-header" class:with-border={!showing}>
        <div class="left">{title}</div>
        <div class="right">
            <button on:click={onHideClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    </div>
    {#if showing}
        <div class="oll-section-body">
            {#each patterns as pattern}
                <OllShape pattern={pattern.pattern} solution={pattern.solution} />
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

    .oll-section-header.with-border {
        border-bottom: 1px solid #333;
    }

    .oll-section-header .left,
    .oll-section-header .right {
        display: flex;
        flex: 1;
        align-items: center;

        height: 100%;
    }

    button {
        height: 100%;

        padding-left: 1rem;
        padding-right: 1rem;

        background-color: rgba(255, 255, 255, 0.05);
        color: #bbb;

        border-radius: 0.5rem;
        border: none;

        font-family: Consolas;
        font-size: 1rem;
        font-weight: 600;
    }

    button:hover {
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }

    button:active {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .oll-sect .oll-section-header .left {
        justify-content: flex-start;
    }

    .oll-section-header .right {
        justify-content: flex-end;
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
