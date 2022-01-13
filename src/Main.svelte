<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import Oll from "./OLL.svelte";
    import OllSearch from "./OLLSearch.svelte";
    import { subscribe, Event } from "./scripts/event-bus";

    let tab = "oll";
    let searchType = "";

    const subscriptions: Function[] = [];
    onMount(() => {
        subscriptions.push(subscribe(Event.TabChanged, onTabChanged));
        subscriptions.push(subscribe(Event.SearchOpened, onSearchOpened));
        subscriptions.push(subscribe(Event.SearchClosed, onSearchClosed));
    });

    onDestroy(() => {
        for (const unsub of subscriptions) {
            unsub();
        }
    });

    function onTabChanged(newTab: string) {
        tab = newTab;
    }

    function onSearchOpened() {
        searchType = tab;
    }

    function onSearchClosed() {
        searchType = "";
    }
</script>

<div class="main">
    {#if tab === "oll"}
        <Oll />
    {:else if tab === "pll"}
        Pll tab
    {:else if tab === "time"}
        Time tab
    {/if}

    {#if searchType === "oll"}
        <OllSearch />
    {:else if searchType === "pll"}
        Hello
    {/if}
</div>

<style>
    .main {
        position: relative;

        width: calc(100% - var(--toolbar-width));
        height: 100%;

        background-color: #333;
    }
</style>
