<script>
    import SourceName from './SourceName.svelte';
    import Tag from './Tag.svelte';
    import Loader from './Loader.svelte';

    import {gql} from 'apollo-boost';
    import {client} from './common';
    import {query} from 'svelte-apollo';

    export let id;
    export let openTag;

    $: data = query(client, {
        query: gql`
            {
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
            }`
    });
</script>

<article>
    {#await $data}
        <Loader/>
    {:then result}
        {#if result.data.Entry.source && result.data.Entry.source.name}
            <SourceName name={result.data.Entry.source.name}/>
        {/if}
        <h1>
            {result.data.Entry.title}
        </h1>
        {#if result.data.Entry.image && result.data.Entry.image.publicUrl}
            <img src={result.data.Entry.image.publicUrl} alt={result.data.Entry.title}>
        {/if}
        <p class="date">
            {new Date(result.data.Entry.publishDate).toLocaleDateString()}
        </p>
        <p>
            {result.data.Entry.content}
        </p>
        <footer>
            {#each result.data.Entry.tags as tag, index}
                <Tag onClick={openTag} data={tag}/>
            {/each}
            <p>
                <a class="link" href={result.data.Entry.url} target="_blank" rel="noopener">
                    <svg role="presentation">
                        <use xlink:href="#forward"></use>
                    </svg>
                    {result.data.Entry.url}
                </a>
            </p>
        </footer>
    {:catch error}
        <p>Error loading items: {error}</p>
    {/await}
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
