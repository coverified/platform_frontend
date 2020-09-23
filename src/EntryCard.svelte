<script>
    export let item;

    console.log(item);
</script>

{#if item}
    <article>
        {#if item.source && item.source.name}
            <header>
                <svg role="presentation">
                    <use xlink:href="#wika"></use>
                </svg>
                {item.source.name}
            </header>
        {/if}
        <h1>
            {item.title}
        </h1>
        <footer>
            {#each item.tags as tag, index}
                <button>
                    #{tag.name}
                </button>
            {/each}
        </footer>
    </article>
{/if}

<style>
    article {
    }

    header {
        font-size: .75rem;
    }

    header svg {
        height: .875rem;
        width: .9375rem;
    }

    h1 {
        font-size: 1rem;
        margin-top: .33rem;
        margin-bottom: .2rem;
        word-break: break-word;
        hyphens: auto;
    }

    footer {
        margin-left: -.125rem;
        margin-right: -.125rem;
    }

    button {
        appearance: none;
        border: 0;
        font-size: .75rem;
        background-color: transparent;
        color: var(--color-text-muted);
        padding: 0;
        margin: .225rem .125rem;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
    }
</style>
