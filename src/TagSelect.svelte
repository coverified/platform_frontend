<script>
    import {gql} from 'apollo-boost';
    import {client} from './common';
    import {query} from 'svelte-apollo';

    export let onChange;
    export let selected = false;
    export let textDefault = 'Schlagwort Filter';
    export let textAll = 'Alle Schlagworte';

    const data = query(client, {
        query: gql`
            {
                allTags(
                     sortBy: name_ASC,
                ) {
                    name,
                    id,
                }
            }`
    });
</script>
<select class="{$$props.class}" bind:value={selected} on:change={selected => {onChange(selected)}}>
    {#if textDefault}
        <option value={false} selected disabled>
            {textDefault}
        </option>
    {/if}
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
        {#if textAll}
            <option value={false}>
                {textAll}
            </option>
        {/if}
    {:catch error}
        <option value={false} disabled>
            Error loading items: {error}
        </option>
    {/await}
</select>
