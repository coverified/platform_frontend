<script>
    import ScriptLoader from './ScriptLoader.svelte';
    import StyleLoader from './StyleLoader.svelte';

    export let urls = [];
</script>

<StyleLoader url="https://cdn.ampproject.org/amp-story-player-v0.css"/>
<ScriptLoader url="https://cdn.ampproject.org/amp-story-player-v0.js"/>

{#if urls.length}
    <amp-story-player>
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
