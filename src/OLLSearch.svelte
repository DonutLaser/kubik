<script lang="ts">
    import { onMount } from "svelte";

    import * as searchService from "./scripts/search-service";

    interface PatternSquare {
        on: boolean;
        unused: boolean; // Property for UI purposes only
    }

    // Pairs of coordinates to help define the cubes. Setting one pair will disable other pairs.
    const cubes: number[][][] = [
        [
            [0, 1],
            [1, 0],
            [1, 1],
        ],
        [
            [0, 2],
            [1, 2],
        ],
        [
            [0, 3],
            [1, 3],
            [1, 4],
        ],
        [
            [2, 0],
            [2, 1],
        ],
        [[2, 2]],
        [
            [2, 3],
            [2, 4],
        ],
        [
            [3, 0],
            [3, 1],
            [4, 1],
        ],
        [
            [3, 2],
            [4, 2],
        ],
        [
            [3, 3],
            [3, 4],
            [4, 3],
        ],
    ];

    let pattern: PatternSquare[][] = [];

    onMount(() => {
        setupPattern();
    });

    function setupPattern() {
        for (let y = 0; y < 5; ++y) {
            pattern[y] = [];
            for (let x = 0; x < 5; ++x) {
                pattern[y][x] = { on: false, unused: false };
            }
        }

        // The corners are unused
        pattern[0][0].unused = true;
        pattern[0][4].unused = true;
        pattern[4][0].unused = true;
        pattern[4][4].unused = true;

        pattern = pattern; // Update reference
    }

    function onOverlayClick(event: MouseEvent) {
        const target = event.target as HTMLElement;
        if (!target.classList.contains("overlay")) {
            return;
        }

        searchService.closeSearch();
    }

    function onPatternClick(rowIndex: number, columnIndex: number) {
        pattern[rowIndex][columnIndex].on = !pattern[rowIndex][columnIndex].on;

        if (!pattern[rowIndex][columnIndex].on) {
            return;
        }

        let foundCube: number[][] = [];
        outerLoop: for (const cube of cubes) {
            for (const pair of cube) {
                if (pair[0] === rowIndex && pair[1] === columnIndex) {
                    foundCube = cube;
                    break outerLoop;
                }
            }
        }

        for (const pair of foundCube) {
            if (pair[0] !== rowIndex || pair[1] !== columnIndex) {
                pattern[pair[0]][pair[1]].on = false;
            }
        }
    }

    function onFindClick() {
        searchService.closeSearch();

        const pat: number[][] = [];

        for (let y = 0; y < 5; ++y) {
            pat[y] = [];
            for (let x = 0; x < 5; ++x) {
                if (pattern[y][x].unused) {
                    pat[y][x] = 2;
                } else if (pattern[y][x].on) {
                    pat[y][x] = 1;
                } else {
                    pat[y][x] = 0;
                }
            }
        }
        searchService.findPattern(pat);
    }
</script>

<div class="oll-search">
    <div class="overlay" on:click={onOverlayClick}>
        <div class="oll-search-base">
            <div class="oll-search-pattern">
                {#each pattern as row, rowIndex}
                    {#each row as square, columnIndex}
                        <div
                            class="oll-search-pattern-square"
                            class:dummy={square.unused}
                            class:active={square.on}
                            on:click={() => {
                                onPatternClick(rowIndex, columnIndex);
                            }}
                        />
                    {/each}
                {/each}
            </div>
            <button class="oll-search-button" on:click={onFindClick}>Find pattern</button>
        </div>
    </div>
</div>

<style>
    .oll-search {
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
    }

    .overlay {
        width: 100%;
        height: 100%;
    }

    .oll-search-base {
        position: absolute;
        bottom: 1rem;
        left: 1rem;

        display: flex;
        flex-direction: column;

        width: 40vh;
        height: 40vh;

        padding: 1rem;

        background-color: #555;

        border-radius: 0.5rem;

        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
    }

    .oll-search-pattern {
        display: grid;
        grid-template-columns: 0.5fr 3fr 3fr 3fr 0.5fr;
        grid-template-rows: 0.5fr 3fr 3fr 3fr 0.5fr;
        column-gap: 0.65rem;
        row-gap: 0.65rem;

        height: 30vh;
        width: 30vh;

        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2rem;
    }

    .oll-search-pattern-square {
        background-color: #333;

        border-radius: 0.5rem;
    }

    .oll-search-pattern-square:hover {
        cursor: pointer;
        background-color: #3b3b3b;
    }

    .oll-search-pattern-square:active {
        background-color: #3f3f3f;
    }

    .oll-search-pattern-square.active {
        background-color: #edee38;
    }

    .oll-search-pattern-square.active:hover {
        background-color: #fcfc49;
    }

    .oll-search-pattern-square.active:active {
        background-color: #fcfc61;
    }

    .oll-search-pattern-square.dummy {
        visibility: hidden;
    }

    .oll-search-button {
        flex: 1;

        background-color: rgba(255, 255, 255, 0.05);
        color: #bbb;

        border-radius: 0.5rem;
        border: none;

        font-family: Consolas;
        font-size: 1rem;
        font-weight: 600;
    }

    .oll-search-button:hover {
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }

    .oll-search-button:active {
        background-color: rgba(255, 255, 255, 0.2);
    }
</style>
