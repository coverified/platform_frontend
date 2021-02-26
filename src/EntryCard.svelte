<script>
    export let item;
    export let open = false;

    const cutContentLength = (text, max = 200) => {
        return text && text.length > max ? text.slice(0, max).split(' ').slice(0, -1).join(' ') : text
    }
</script>

{#if item}
    <li class={open ? 'open' : ''}>
        <article>
            {#if item.image && item.image.publicUrl}
                <img src={item.image.publicUrl} alt={item.title}>
            {/if}
            <div class="content">
                <h1>
                    {item.title}
                </h1>
                <p class="meta">
                    {#if item.publishDate}
                        {new Date(item.publishDate).toLocaleDateString()}
                    {/if}
                    {#if item.publishDate && item.source?.name}
                        &nbsp;|&nbsp;
                    {/if}
                    {#if item.source?.name}
                        {item.source.name}
                    {/if}
                </p>
                {#if item.content}
                    <p>
                        {#if open}
                            {item.content}
                        {:else}
                            {cutContentLength(item.content)}...
                        {/if}
                    </p>
                {/if}
                {#if open}
                    {#if item.url}
                        <a href={item.url} target="_blank" rel="noopener">zum Artikel</a>
                    {/if}
                {/if}
            </div>
            <button on:click|preventDefault={()=>{open = !open}}>
                weitere Informationen
            </button>
        </article>
    </li>
{/if}

<style>
    li {
        border-radius: .3125rem;
        background-color: #fff;
        cursor: pointer;
        overflow: hidden;
        filter: drop-shadow(0 0 .42rem rgba(0, 0, 0, .2));
        position: relative;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }

    .content {
        padding: 2rem 1rem 3rem 1rem;
    }

    h1 {
        font-size: 2rem;
        margin-top: .33em;
        margin-bottom: .2em;
        word-break: break-word;
        hyphens: auto;
    }

    .meta {
        font-size: 1.25rem;
        color: var(--color-text-muted);
    }

    footer {
        margin-left: -.125rem;
        margin-right: -.125rem;
    }

    a {
        display: inline-block;
        padding: .75rem 1.25rem .75rem 1.5rem;
        border: solid 1px #979797;
    }

    button {
        appearance: none;
        background-color: #d8d8d8;
        font-size: 0;
        color: transparent;
        height: 2.625rem;
        width: 2.625rem;
        position: absolute;
        right: 0;
        bottom: 0;
        border: 0;
    }
</style>
