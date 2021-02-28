<script>
    export let item;
    export let open = false;

    const cutContentLength = (text, max = 200) => {
        return text && text.length > max ? text.slice(0, max).split(' ').slice(0, -1).join(' ') + '...' : text
    }
</script>

{#if item}
    <li class={open ? 'open' : ''}>
        <article>
            {#if item.image?.publicUrl}
                <div class="img">
                    <img src={item.image.publicUrl} alt={item.title}>
                    <svg role="presentation" class="entry-icon">
                        <use xlink:href="#article"></use>
                    </svg>
                </div>
            {:else}
                <svg role="presentation" class="entry-icon">
                    <use xlink:href="#article"></use>
                </svg>
            {/if}
            <a class="content" href={item.url} target="_blank" rel="noopener" title={`Direkt zu "${item.title}"`}>
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
                        {#if item.source?.acronym}
                            {#if open}
                                {item.source.name}
                            {:else}
                                {item.source.acronym}
                            {/if}
                        {:else}
                            {item.source.name}
                        {/if}
                    {/if}
                </p>
                {#if item.content}
                    <p>
                        {#if open}
                            {cutContentLength(item.content, 420)}
                        {:else}
                            {cutContentLength(item.content)}
                        {/if}
                    </p>
                {/if}
                {#if open}
                    <span class="link">
                        zum Artikel
                        <svg role="presentation">
                            <use xlink:href="#forward"></use>
                        </svg>
                    </span>
                {/if}
            </a>
            <button on:click|preventDefault={()=>{open = !open}}>
                weitere Informationen
                <svg role="presentation">
                    <use xlink:href="#chevron"></use>
                </svg>
            </button>
        </article>
    </li>
{/if}

<style>
    li {
        border-radius: .3125rem;
        background-color: #fff;
        overflow: hidden;
        filter: drop-shadow(0 0 .42rem rgba(0, 0, 0, .15));
        position: relative;
    }

    .entry-icon {
        width: 1.625em;
        height: 1.625em;
        color: var(--color-text-muted);
        margin: 1.25rem 1.25rem 0 1.25rem;
    }

    .img .entry-icon {
        position: absolute;
        left: 1.25rem;
        top: 1.25rem;
        color: #fff;
        filter: drop-shadow(0 0 .23rem rgba(0, 0, 0, .15));
        margin: 0;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: .75rem;
    }

    .content {
        display: block;
        text-decoration: none;
        color: #000;
        padding: .75rem 1.25rem 3rem 1.25rem;
    }

    .content:before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: calc(100% - 2.625rem);
        left: 0;
        top: 0;
    }

    h1 {
        font-size: 1.625rem;
        line-height: 1.125;
        margin-top: 0;
        margin-bottom: .2em;
        word-break: break-word;
        hyphens: auto;
    }

    .meta {
        color: var(--color-text-muted);
    }

    footer {
        margin-left: -.125rem;
        margin-right: -.125rem;
    }

    .link {
        display: inline-block;
        padding: .75rem 2.5rem .75rem 1.5rem;
        border: solid 1px #a7a7a7;
        position: relative;
    }

    .link svg {
        color: #0470ad;
        position: absolute;
        top: 50%;
        right: 1.125rem;
        transform: translate(0, -50%);
        width: 1.125em;
        height: 1.125em;
        transition: .3s ease-out transform;
    }

    .link:hover svg {
        transform: translate(.3em, -50%);
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
        cursor: pointer;
    }

    button svg {
        color: #0470ad;
        width: 1.42rem;
        height: 1.42rem;
        transition: .3s ease-out transform;
    }

    .open button svg {
        transform: rotate(180deg);
    }

    p {
        line-height: 1.32;
    }
</style>
