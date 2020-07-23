<script>
    import {client, ENTRIES} from './common';
    import {query} from 'svelte-apollo';

    const entries = query(client, {query: ENTRIES});
</script>

<ul>
    {#await $entries}
        <li>Loading...</li>
    {:then result}
        {#each result.data.allEntries as entry (entry.id)}
            <li>{entry.title}</li>
        {:else}
            <li>No entries found</li>
        {/each}
    {:catch error}
        <li>Error loading entries: {error}</li>
    {/await}
</ul>
