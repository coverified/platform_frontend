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
    {#each result.data.allTags as item, index}
        <button on:click|preventDefault={ () => typeof onClick === 'function' && onClick(item) }>
            {item.name}
        </button>
    {:else}
        No items found
    {/each}
{:catch error}
    Error loading items: {error}
{/await}
