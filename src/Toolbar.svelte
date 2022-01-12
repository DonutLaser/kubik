<script lang="ts">
    let activeTab = "oll";

    function onTabClick(tabName: string) {
        activeTab = tabName;
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
            class:active={activeTab === "search"}
            on:click={() => {
                onTabClick("search");
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
        box-shadow: inset -2px 0px 0px 0px #feb503;
        color: #feb503;
    }
</style>
