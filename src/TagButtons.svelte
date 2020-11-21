<script>
    import TagSelect from './TagSelect.svelte';

    import {gql} from 'apollo-boost';
    import {client} from './common';
    import {query} from 'svelte-apollo';

    export let onClick = null;
    export let limit = 2;

    const data = query(client, {
        query: gql`
            {
                allTags(
                     first: ${limit},
                ) {
                    name,
                    id
                }
            }`
    });
</script>

{#await $data}
    Loading...
{:then result}
    <div class="tags">
        {#each result.data.allTags as item, index}
            <button on:click|preventDefault={ () => typeof onClick === 'function' && onClick(item) }>
                #{item.name}
            </button>
        {:else}
            <div class="no-result">
                No items found
            </div>
        {/each}
        <div class="tags__select__wrap">
            <TagSelect class="tags__select" textDefault={false} textAll={false}/>
        </div>
    </div>
{:catch error}
    Error loading items: {error}
{/await}

<style type="text/scss">
    .tags {
        margin: .5rem -.125rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    button {
        appearance: none;
        border: 0;
        background-color: var(--color-tag-bg);
        font-size: .75rem;
        padding: .5rem .75rem;
        border-radius: 1.5rem;
        margin: .225rem .125rem;
        cursor: pointer;
        max-width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: left;
    }

    .tags__select__wrap {
        position: relative;
        margin: .225rem .125rem .225rem auto;

        &:before {
            content: '+';
            position: absolute;
            top: 45%;
            left: 50%;
            font-size: 1.5em;
            line-height: 1;
            transform: translate(-50%, -50%);
            pointer-events: none;
        }
    }

    :global(.tags__select) {
        border-color: #33ff99;
        border-style: solid;
        border-width: 2px;
        background: transparent;
        font-size: .875em;
        font-weight: 500;
        width: 2rem;
        height: 2rem;
        border-radius: 2rem;
        color: transparent;
        margin: 0;

        &:focus,
        &:hover {
            background: #33ff99;
            cursor: pointer;
        }
    }
</style>
