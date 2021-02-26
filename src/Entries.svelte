<script>
    import {gql} from '@apollo/client';
    import {query} from 'svelte-apollo';
    import EntryCard from './EntryCard.svelte';
    import Loader from './Loader.svelte';

    export let tagFilter = false;
    export let limit = 6;
    export let page = 0;
    export let disableMore;

    const coVerifiedTagIdS = [
        'ddb440cf-ccbb-4780-a559-8e755cfb155d',
        // TODO: add other ID as well
    ];

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
            ${tagFilter && tagFilter.length ? `
            where: {
                AND: [
                    { tags_some: { id_in : ${JSON.stringify(tagFilter)} } }
                    ${!tagFilter.some(r => coVerifiedTagIdS.indexOf(r) >= 0) ? `{ tags_none: { id_in: ${JSON.stringify(coVerifiedTagIdS)} } }` : ''}
                ]
            }` : `
            where: {
                AND: [
                    { tags_none: { id_in: ${JSON.stringify(coVerifiedTagIdS)} } }
                ]
            }
            `}
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
