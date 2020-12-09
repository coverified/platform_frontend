<script>
    import SourceName from './SourceName.svelte';

    export let item;
</script>

{#if item}
    <article>
        {#if item.image && item.image.publicUrl}
            <img src={item.image.publicUrl} alt={item.title}>
        {/if}
        <div class="content">
            {#if item.source && item.source.name}
                <SourceName name={item.source.name}/>
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
        </div>
    </article>
{/if}

<style>
    img {
        display: block;
        width: 100%;
        height: auto;
    }

    .content {
        padding: var(--entry-padding);
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
