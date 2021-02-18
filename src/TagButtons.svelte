<script>
    import Tag from './Tag.svelte';
    import TagSelect from './TagSelect.svelte';
    import Loader from './Loader.svelte';

    import {gql} from '@apollo/client';
    import {query} from 'svelte-apollo';

    export let limit = 7;
    export let openTag;

    const allTags = query(gql`{
        allTags(
             first: ${limit},
        ) {
            name,
            id
        }
    }`);
</script>
{#if $allTags.loading}
    <Loader/>
{:else if $allTags.error}
    <p>
        Error loading items :(
    </p>
    <pre>
        <code>
            {$allTags.error.message}
        </code>
    </pre>
{:else}
    <div class="tags">
        {#each $allTags.data.allTags as item}
            <Tag onClick={openTag} data={item}/>
        {:else}
            <div class="no-result">
                No items found
            </div>
        {/each}
        <div class="tags__select__wrap">
            <TagSelect class="tags__select" textDefault={' '} textAll={false} onChange={openTag}/>
        </div>
    </div>
{/if}

<style type="text/scss">
    .tags {
        margin: .5rem 0;
        padding: 0 .625rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .tags__select__wrap {
        position: relative;
        margin: .225rem .125rem .225rem auto;

        &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 1.25em;
            height: 1.25em;
            transform: translate(-50%, -50%);
            pointer-events: none;
            background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cline x1="12" y1="5" x2="12" y2="19"%3E%3C/line%3E%3Cline x1="5" y1="12" x2="19" y2="12"%3E%3C/line%3E%3C/svg%3E');
            background-size: 100% 100%;
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
