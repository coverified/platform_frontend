<script>
    import {beforeUpdate, afterUpdate, onMount, onDestroy} from 'svelte';
    import ScriptLoader from './ScriptLoader.svelte';
    import StyleLoader from './StyleLoader.svelte';

    let active = true;

    export let urls = [];
    export let entropy = Math.random();

    $: id = `${Math.random() * 1000 + urls.length + entropy}`.replace(/\./g, '');

    console.log('init');
    // onMount(()=>{
    //     entropy = Math.random();
    // });
    // onDestroy(()=>{
    //     entropy = Math.random();
    // });
</script>

{id}
{active}
{#if urls.length && active}
    <StyleLoader url="https://cdn.ampproject.org/amp-story-player-v0.css"/>
    <ScriptLoader url="https://cdn.ampproject.org/amp-story-player-v0.js"/>
    <amp-story-player id={id}>
        {#each urls as url}
            <a href={url}></a>
        {/each}
    </amp-story-player>
{/if}

<style>
    amp-story-player {
        width: 100vh;
        height: 100vw;
        max-width: 360px;
        max-height: 600px;
    }
</style>
