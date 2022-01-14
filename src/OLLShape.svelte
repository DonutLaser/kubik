<script lang="ts">
    import { openModal } from "svelte-modal-system";
    import OLLShapeModal from "./OLLShapeModal.svelte";

    export let pattern: number[][] = [[]];
    export let solution = "";

    function onShapeClick() {
        openModal(
            OLLShapeModal,
            {
                width: "fit-content",
                height: "fit-content",
                animate: false,
                customWindowClass: "custom-modal-window",
            },
            { solution }
        );
    }
</script>

<div class="oll-shape" on:click={onShapeClick}>
    <div class="oll-shape-base">
        <div class="oll-shape-pattern">
            {#each pattern as row}
                {#each row as square}
                    <div class="oll-shape-pattern-square" class:dummy={square === 2} class:active={square === 1} />
                {/each}
            {/each}
        </div>
    </div>
</div>

<style>
    .oll-shape {
        width: 100%;
        height: 100%;

        min-height: 320px;

        background-color: #444;

        border-radius: 0.5rem;
    }

    .oll-shape:hover {
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
        transform: scale(1.02);
        cursor: pointer;
    }

    .oll-shape-base {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
        height: 100%;

        padding: 2rem;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }

    .oll-shape-pattern {
        display: grid;
        grid-template-columns: 0.5fr 3fr 3fr 3fr 0.5fr;
        grid-template-rows: 0.5fr 3fr 3fr 3fr 0.5fr;
        column-gap: 0.5rem;
        row-gap: 0.5rem;

        width: 100%;
        height: 100%;
    }

    .oll-shape-pattern-square {
        background-color: #333;

        border-radius: 0.5rem;
    }

    .oll-shape-pattern-square.active {
        background-color: #edee38;
    }

    .oll-shape-pattern-square.dummy {
        visibility: hidden;
    }
</style>
