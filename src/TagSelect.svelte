<script>
    import {gql} from 'apollo-boost';
    import {client} from './common';
    import {query} from 'svelte-apollo';

    export let selected = false;

    const data = query(client, {
        query: gql`
            {
                allTags {
                    name,
                    id,
                }
            }`
    });
</script>
<select bind:value={selected}>
    <option value={false} selected disabled>
        Filter by tag
    </option>
    {#await $data}
        <option value={false} disabled>
            Loading...
        </option>
    {:then result}
        {#each result.data.allTags as item, index}
            <option value={item.id}>
                {item.name}
            </option>
        {:else}
            <option value={false}>
                No items found
            </option>
        {/each}
        <option value={false}>
            all tags
        </option>
    {:catch error}
        <option value={false} disabled>
            Error loading items: {error}
        </option>
    {/await}
</select>
