<script>
    import {client, env, storyEndpoints} from './common';
    import {setClient} from 'svelte-apollo';
    import Entries from './Entries.svelte';
    import Story from './Story.svelte';
    import TagSelect from './TagSelect.svelte';
    import TagButtons from './TagButtons.svelte';

    let selectedTag = false;
    let moreClicks = 0;

    $: urls = selectedTag ? [`${storyEndpoints[env]}/tag/${selectedTag}`] : [];
    $: pageLoops = Array(moreClicks + 1);

    const onClick = item => {
        selectedTag = item.id;
    }

    setClient(client);
</script>

<main>
    <header>
        <svg role="presentation">
            <use xlink:href="#wika"></use>
        </svg>
        <h1>
            Wissenskanal
        </h1>
    </header>
    <Story/>
<!--    TODO: refactor this to search UI-->
<!--    <TagSelect bind:selected={selectedTag}/>-->
    <h2>
        Themen entdecken
    </h2>
    <TagButtons onClick={onClick}/>
    <h2>
        Das bewegt Deutschland
    </h2>
    {#each pageLoops as _, i}
        <Entries tagFilter={selectedTag} page={i}/>
    {/each}
    <button on:click={()=>{moreClicks++}}>more</button>
</main>

<!--ICONS-->
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <symbol id="wika" viewBox="0 0 27.8 25" aria-labelledby="WiKa - Wissenskanal">
        <title>WiKa - Wissenskanal</title>
        <path clip-rule="evenodd" d="m22.8 1.6-5 14.5-3.7-9.9c-.5-1.2-1.9-1.9-3.1-1.4-.2.1-.4.1-.5.2-.5.2-.9.7-1 1.2l-3.3 9.8-1.6-4.5c-.5-1.2-1.9-1.9-3.1-1.4s-1.9 1.9-1.4 3.1l3.9 10.3c.4 1 1.4 1.6 2.4 1.5 1.1.1 2.1-.5 2.5-1.6l3.3-9.5 3.6 9.7c.4 1 1.4 1.6 2.4 1.5 1.1.1 2.1-.5 2.5-1.6l7.1-20.3c.4-1.2-.2-2.6-1.5-3-1.7-.5-3.1.2-3.5 1.4z" fill="#3f9" fill-rule="evenodd"/>
    </symbol>
</svg>

<style>
    :host,
    main {
        --color-primary: #003366;
        --color-tag-bg: #f0f0f0;
        --color-text: #011321;
        --color-text-muted: #677182;
        --color-text-on-primary: #ffffff;

        all: unset;
        font-size: 16px;
        color: var(--color-text);
    }

    header {
        background-color: var(--color-primary);
        color: var(--color-text-on-primary);
        padding: 1rem;
        border-top-left-radius: 1rem;
    }

    header svg {
        height: 25px;
        width: 27.8px;
    }

    h1 {
        font-size: .8125rem;
        margin: 0;
        display: inline-block;
        font-weight: normal;
    }

    h2 {
        text-align: center;
        font-weight: 700;
        font-size: .8125rem;
        padding: .75em 0;
    }
</style>
