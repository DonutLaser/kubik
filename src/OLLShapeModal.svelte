<script lang="ts">
    import { getAlgorithmPattern } from "./scripts/oll-service";

    export let solution = "";
    export let production = "";

    $: finalSolution = generateAlgorithm(solution);
    $: finalProduction = generateAlgorithm(production);

    function generateAlgorithm(algo: string): { value: string; color: string }[] {
        const result: { value: string; color: string }[] = [];
        const split = algo.split(" ");
        for (const str of split) {
            result.push(getAlgorithmPattern(str));
        }

        return result;
    }
</script>

<div class="oll-shape-modal">
    <h3>Solution</h3>
    <div class="oll-shape-modal-solution">
        {#each finalSolution as part}
            <span class={part.color}>{part.value} </span>
        {/each}
    </div>
    <!-- @TODO (!important) have a question mark to explain this -->
    <h3>Production</h3>
    <div class="oll-shape-modal-production">
        {#each finalProduction as part}
            <span class={part.color}>{part.value} </span>
        {/each}
    </div>
</div>

<style>
    .oll-shape-modal {
        padding: 1rem;

        min-width: 320px;
        height: fit-content;
    }

    h3 {
        font-family: Consolas;
        color: #feb503;
    }

    .oll-shape-modal-solution {
        margin-bottom: 1rem;

        color: white;

        font-family: Consolas;
        font-size: 1rem;
        font-weight: 600;
    }

    .oll-shape-modal-production {
        color: white;

        font-family: Consolas;
        font-size: 1rem;
        font-weight: 600;
    }

    .color-red {
        color: #f03939;
    }

    .color-green {
        color: #00b651;
    }

    .color-blue {
        color: #3c83ff;
    }
</style>
