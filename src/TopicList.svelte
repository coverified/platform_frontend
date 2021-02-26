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

    $: tagFilter = selected ? [changeTagFilter(selected)] : [
        '206ecf19-5fea-4b0e-b45f-9a7091df0cdd',
        '5897c906-2e74-4a07-b271-c77c9475b590',
        '6ce6f250-04d0-4911-9be4-7c5dc9aca832',
    ];
    $: pageLoops = Array(moreClicks + 1);

    setClient(client);
</script>

<Icons/>

<section>
    <header>
        <TagSelect bind:selected/>
    </header>
    <main>
        {#each pageLoops as _, i}
            <Entries
                    limit={6}
                    page={i}
                    {tagFilter}
                    bind:disableMore
            />
        {/each}
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
    }

    :global(*),
    :global(*:before),
    :global(*:after) {
        box-sizing: border-box;
    }
</style>
