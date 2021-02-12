<script>
    import SourceName from './SourceName.svelte';
    import Tag from './Tag.svelte';
    import Loader from './Loader.svelte';

    import {gql} from '@apollo/client';
    import {query} from 'svelte-apollo';

    export let id;
    export let openTag;

    const entry = query(gql`{
        Entry(
            where: {
                id: "${id}"
            }
        ){
            source {
                id,
                name,
            },
            tags {
                id,
                name,
            },
            publishDate,
            id,
            title,
            content,
            url,
            image {
              publicUrl,
            },
        }
    }`);
</script>

<article>
    {#if $entry.loading}
        <Loader/>
    {:else if $entry.error}
        <p>
            Error loading data :(
        </p>
        <pre>
            <code>
                {$entry.error.message}
            </code>
        </pre>
    {:else}
        {#if $entry.data.Entry.source && $entry.data.Entry.source.name}
            <SourceName name={$entry.data.Entry.source.name}/>
        {/if}
        <h1>
            {$entry.data.Entry.title}
        </h1>
        {#if $entry.data.Entry.image && $entry.data.Entry.image.publicUrl}
            <img src={$entry.data.Entry.image.publicUrl} alt={$entry.data.Entry.title}>
        {/if}
        <p class="date">
            {new Date($entry.data.Entry.publishDate).toLocaleDateString()}
        </p>
        <p>
            {$entry.data.Entry.content}
        </p>
        <footer>
            {#each $entry.data.Entry.tags as tag, index}
                <Tag onClick={openTag} data={tag}/>
            {/each}
            <p>
                <a class="link" href={$entry.data.Entry.url} target="_blank" rel="noopener">
                    <svg role="presentation">
                        <use xlink:href="#forward"></use>
                    </svg>
                    {$entry.data.Entry.url}
                </a>
            </p>
        </footer>
    {/if}
</article>

<style type="text/scss">
    img {
        display: block;
        width: 100%;
        height: auto;
        margin-bottom: .75rem;
    }

    .date {
        font-size: .875rem;
    }

    .link {
        padding-left: 2.5em;
        position: relative;
        display: block;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .875rem;

        svg {
            display: block;
            width: 1.5em;
            height: 1.5em;
            vertical-align: middle;
            color: #33ff99;
            position: absolute;
            left: .5em;
            top: -.0875em;
        }
    }
</style>
