<script lang="ts">
    import { onDestroy, onMount } from "svelte";

    import { emit, Event, subscribe } from "./scripts/event-bus";
    import * as searchService from "./scripts/search-service";

    let activeTab = "oll";
    let searchActive = false;

    const subscriptions: Function[] = [];
    onMount(() => {
        subscriptions.push(subscribe(Event.SearchOpened, onSearchOpen));
        subscriptions.push(subscribe(Event.SearchClosed, onSearchClosed));
    });

    onDestroy(() => {
        for (const unsub of subscriptions) {
            unsub();
        }
    });

    function onSearchOpen() {
        searchActive = true;
    }

    function onSearchClosed() {
        searchActive = false;
    }

    function onTabClick(tabName: string) {
        activeTab = tabName;
        searchService.closeSearch();
        emit(Event.TabChanged, tabName);
    }

    function onSearchClick() {
        searchService.toggleSearch();
    }
</script>

<div class="toolbar">
    <div class="top">
        <button
            class:active={activeTab === "oll"}
            on:click={() => {
                onTabClick("oll");
            }}>OLL</button
        >
        <button
            class:active={activeTab === "pll"}
            on:click={() => {
                onTabClick("pll");
            }}>PLL</button
        >
    </div>
    <div class="bottom">
        <button
            class:active={searchActive}
            on:click={() => {
                onSearchClick();
            }}>Find</button
        >
    </div>
</div>

<style>
    .toolbar {
        position: relative;

        display: flex;
        flex-direction: column;

        width: var(--toolbar-width);
        height: 100%;

        background-color: #555;

        box-shadow: 3px 0px 5px 0px rgba(0, 0, 0, 0.3);
    }

    .top {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: flex-start;
    }

    .bottom {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: flex-end;
    }

    button {
        position: relative;

        width: 100%;
        height: var(--toolbar-width);

        background-color: transparent;
        color: #bbb;

        border: none;
        border-radius: 0;

        font-family: Consolas;
        font-size: 1rem;
        font-weight: 600;

        user-select: none;
    }

    button:hover {
        background-color: rgba(255, 255, 255, 0.1);
        cursor: pointer;
    }

    button:active,
    button.active {
        background-color: rgba(255, 255, 255, 0.2);
    }

    button.active {
        color: #feb503;
    }
</style>
