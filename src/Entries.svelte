<script>
    import {gql} from 'apollo-boost';
    import {client} from './common';
    import {query} from 'svelte-apollo';

    export let tagFilter = false;

    $: data = query(client, {
        query: gql`
            {
                allEntries
                 ${tagFilter !== false ? `(
                     where: {
                         tags_some: {
                            name : "${tagFilter}"
                         }
                    }
                 )` : ''}
                 {
                    title,
                    publishDate,
                    content
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
                {new Date(item.publishDate).toDateString()}<br>
                {item.title}<br>
                {item.content}
            </li>
        {:else}
            <li>No items found</li>
        {/each}
    {:catch error}
        <li>Error loading items: {error}</li>
    {/await}
</ul>
