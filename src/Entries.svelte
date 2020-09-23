<script>
    import {gql} from 'apollo-boost';
    import {client} from './common';
    import {query} from 'svelte-apollo';
    import EntryCard from './EntryCard.svelte';

    export let tagFilter = false;
    export let limit = 6;
    export let page = 0;

    $: data = query(client, {
        query: gql`
            {
                allEntries(
                     first: ${limit},
                     skip: ${limit * page},
                     sortBy: publishDate_DESC,
                     ${tagFilter !== false ? `
                         where: {
                             tags_some: {
                                id : "${tagFilter}"
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
                    title,
                }
            }`
    });
</script>

<ul>
    {#await $data}
        <li>Loading...</li>
    {:then result}
        {#each result.data.allEntries as item, index}
            <li>
                <EntryCard {item}/>
            </li>
        {:else}
            <li>No items found</li>
        {/each}
    {:catch error}
        <li>Error loading items: {error}</li>
    {/await}
</ul>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: .75rem 0 0 0;
        display: grid;
        grid-gap: .75rem;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        /*column-count: 2;*/
        /*column-gap: .75rem;*/
        filter: drop-shadow(0 0 .42rem rgba(0, 0, 0, .2));
    }

    li {
        /*margin-bottom: .75rem;*/
        border-radius: .3125rem;
        /*box-shadow: 0 .125rem .9375rem 0 rgba(0, 0, 0, .2);*/
        padding: .875rem .875rem .75rem .875rem;
        background-color: #fff;
    }
</style>
