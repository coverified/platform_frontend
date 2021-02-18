<script>
    import {gql} from '@apollo/client';
    import {query} from 'svelte-apollo';
    import EntryCard from './EntryCard.svelte';
    import Loader from './Loader.svelte';

    export let tagFilter = false;
    export let limit = 6;
    export let page = 0;
    export let title = false;
    export let openEntry = () => {};
    export let disableMore;
    export let directLink = false;

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
             ${tagFilter !== false ? `
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
            image {
              publicUrl,
            },
        }
    }`);
</script>

{#if title}
    <h1>
        {title}
    </h1>
{/if}
<ul>
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
            <li on:click={()=>{openEntry(item.id)}}>
                {#if directLink}
                    <a href={item.url} target="_blank" rel="noopener">
                        <EntryCard {item}/>
                    </a>
                {:else}
                    <EntryCard {item}/>
                {/if}
            </li>
        {:else}
            <li>No items found</li>
        {/each}
        {checkMore($allEntries.data.allEntries.length)}
    {/if}
</ul>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: .75rem .625rem;
        display: grid;
        grid-gap: .75rem;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        /*column-count: 2;*/
        /*column-gap: .75rem;*/
        filter: drop-shadow(0 0 .42rem rgba(0, 0, 0, .2));
    }

    li {
        --entry-padding: .875rem .875rem .75rem .875rem;

        /*margin-bottom: .75rem;*/
        border-radius: .3125rem;
        /*box-shadow: 0 .125rem .9375rem 0 rgba(0, 0, 0, .2);*/
        background-color: #fff;
        cursor: pointer;
        overflow: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
</style>
