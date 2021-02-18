<script>
    import {gql} from '@apollo/client';
    import {query} from 'svelte-apollo';

    export let selected = false;
    export let textDefault = 'Schlagwort Filter';
    export let textAll = 'Alle Schlagworte';

    const allTags = query(gql`{
        allTags(
             sortBy: name_ASC,
        ) {
            name,
            id,
        }
    }`);
</script>
<select class="{$$props.class}" bind:value={selected}>
    {#if textDefault}
        <option value={false} selected disabled>
            {textDefault}
        </option>
    {/if}

    {#if $allTags.loading}
        <option value={false} disabled>
            Loading...
        </option>
    {:else if $allTags.error}
        <option value={false} disabled>
            {$allTags.error.message}
        </option>
    {:else}
        {#each $allTags.data.allTags as item, index}
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
    {/if}
</select>
