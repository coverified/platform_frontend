<script>
    import {client} from './common';
    import {setClient} from 'svelte-apollo';
    import Entries from './Entries.svelte';
    // import Story from './Story.svelte';
    // import TagSelect from './TagSelect.svelte';
    // import TagButtons from './TagButtons.svelte';
    // import Layer from './Layer.svelte';
    // import Article from './Article.svelte';
    import Icons from './Icons.svelte';
    import TagSelect from './TagSelect.svelte';

    let moreClicks = 0;
    let selected = false;
    let disableMore = false;

    const changeTagFilter = filter => {
        moreClicks = -1;

        setTimeout(()=>{
            moreClicks = 0;
            disableMore = false;
        }, 1);

        return filter;
    }

    $: tagFilter = selected ? [changeTagFilter(selected)] : false;
    $: pageLoops = Array(moreClicks + 1);

    setClient(client);
</script>

<Icons/>

<section>
    <header>
        <TagSelect bind:selected/>
    </header>
    <main>
        <ul>
            {#each pageLoops as _, i}
                <Entries
                        limit={6}
                        page={i}
                        {tagFilter}
                        bind:disableMore
                />
            {/each}
        </ul>
    </main>
    <footer>
        <button on:click={()=>{moreClicks++}} disabled={disableMore}>more</button>
    </footer>
</section>

<style type="text/scss">
    :global(:host) {
        --color-primary: #003366;
        --color-tag-bg: #f0f0f0;
        --color-text: #011321;
        --color-text-muted: #677182;
        --color-text-on-primary: #ffffff;

        all: unset;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    :global(*),
    :global(*:before),
    :global(*:after) {
        box-sizing: border-box;
        font-family: inherit;
    }

    ul {
        list-style: none;
        margin: 2.5rem 0;
        padding: 0 1.5rem;
        display: grid;
        grid-gap: 1.5rem;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    }
</style>
