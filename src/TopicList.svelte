<script>
    import {client} from './common';
    import {setClient} from 'svelte-apollo';
    import Entries from './Entries.svelte';
    import Icons from './Icons.svelte';
    import TagSelect from './TagSelect.svelte';
    import { onMount } from 'svelte';

    let moreClicks = 0;
    let selected = false;
    let disableMore = false;

    const changeTagFilter = filter => {
        moreClicks = -1;

        setTimeout(()=>{
            moreClicks = 0;
            disableMore = false;
        }, 1);

        return filter ? [filter] : [];
    }

    $: tagFilter = changeTagFilter(selected);
    $: pageLoops = Array(moreClicks + 1);
    
    setClient(client);
    
    let options = {
        root: null,
        rootMargins: "0px",
        threshold: 0.2
    };

    const more = () => {
        moreClicks++;
    };
    
    let counter = 0;

    let moreBtnVisible = false
    
    onMount(async () => {
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(document.querySelector('footer'));
        function handleIntersect(entries) {
            if (counter < 3) {
                if(entries[0].isIntersecting) {
                    moreBtnVisible = false
                    more();
                    counter++;
                }
            } else {
                moreBtnVisible = true
                return;
            }
        }
    })
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
        {#if moreBtnVisible}
            <button id="more-btn" on:click={()=>{moreClicks++; counter = 0}} disabled={disableMore}>Mehr anzeigen</button>
        {/if}
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
