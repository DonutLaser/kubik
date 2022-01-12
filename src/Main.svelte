<script lang="ts">
    import OLLShape from "./OLLShape.svelte";
</script>

<div class="main">
    <OLLShape />
    <OLLShape />
    <OLLShape />
    <OLLShape />
    <OLLShape />
</div>

<style>
    .main {
        width: calc(100% - var(--toolbar-width));
        height: 100%;

        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);

        column-gap: 1rem;
        row-gap: 1rem;

        background-color: #333;

        padding: 1rem;
    }
</style>
