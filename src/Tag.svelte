<script>
    export let name = null;

    export let onClick;
</script>

<button on:click={onClick}>
    #{name}
</button>

<style type="text/scss">
    button {
        appearance: none;
        border: 0;
        background-color: var(--color-tag-bg);
        font-size: .75rem;
        padding: .5rem .75rem;
        border-radius: 1.5rem;
        margin: .225rem .125rem;
        cursor: pointer;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
    }
</style>
