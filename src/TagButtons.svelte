<script>
    import {gql} from 'apollo-boost';
    import {client} from './common';
    import {query} from 'svelte-apollo';

    export let onClick = null;

    const data = query(client, {
        query: gql`
            {
                allTags {
                    name,
                    id
                }
            }`
    });
</script>

{#await $data}
    Loading...
{:then result}
    <div class="tags">
        {#each result.data.allTags as item, index}
            <button on:click|preventDefault={ () => typeof onClick === 'function' && onClick(item) }>
                #{item.name}
            </button>
        {:else}
            <div class="no-result">
                No items found
            </div>
        {/each}
    </div>
{:catch error}
    Error loading items: {error}
{/await}

<style>
    .tags {
        margin: .5rem -.125rem;
    }

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
    }
</style>
