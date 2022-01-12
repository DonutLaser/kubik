<script lang="ts">
    import Main from "./Main.svelte";
    import Toolbar from "./Toolbar.svelte";
</script>

<div class="app">
    <Toolbar />
    <Main />
</div>

<style>
    .app {
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
</style>
