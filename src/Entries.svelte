<script>
    import {gql} from '@apollo/client';
    import {query} from 'svelte-apollo';
    import EntryCard from './EntryCard.svelte';
    import Loader from './Loader.svelte';

    export let tagFilter = false;
    export let limit = 6;
    export let page = 0;
    export let disableMore;

    const checkMore = length => {
        if (length < limit) {
            disableMore = true;
        }
        return '';
    }

    const allEntries = query(gql`{
        allEntries(
             first: ${limit},
             skip: ${limit * page},
             sortBy: publishDate_DESC,
             ${tagFilter !== false && tagFilter.length ? `
                 where: {
                     tags_some: {
                        id_in : ${JSON.stringify(tagFilter)}
                     }
                }
             ` : ''}
        )
        {
            source {
              id,
              name,
            },
            tags {
              id,
              name,
            },
            url,
            id,
            title,
            content,
            publishDate,
            image {
              publicUrl,
            },
        }
    }`);
</script>

{#if $allEntries.loading}
    <Loader/>
{:else if $allEntries.error}
    <p>
        Error loading items :(
    </p>
    <pre>
        <code>
            {$allEntries.error.message}
        </code>
    </pre>
{:else}
    {#each $allEntries.data.allEntries as item, index}
        <EntryCard {item}/>
    {:else}
        <li>No items found</li>
    {/each}
    {checkMore($allEntries.data.allEntries.length)}
{/if}

<style>
</style>
