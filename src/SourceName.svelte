<script>
    export let name;
</script>

{#if name}
    <header>
        <svg role="presentation">
            <use xlink:href="#wika"></use>
        </svg>
        {name}
    </header>
{/if}

<style>
    header {
        font-size: .75em;
        font-weight: 500;
    }

    header svg {
        height: .875em;
        width: .9375em;
    }
</style>
