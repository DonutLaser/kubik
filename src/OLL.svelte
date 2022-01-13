<script lang="ts">
    import OllShape from "./OLLShape.svelte";
</script>

<div class="oll">
    <OllShape />
    <OllShape />
    <OllShape />
    <OllShape />
    <OllShape />
</div>

<style>
    .oll {
        width: 100%;
        height: 100%;

        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(3, 1fr);

        column-gap: 1rem;
        row-gap: 1rem;

        padding: 1rem;
    }
</style>
