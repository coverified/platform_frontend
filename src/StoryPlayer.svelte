<script>
    import ScriptLoader from './ScriptLoader.svelte';
    import StyleLoader from './StyleLoader.svelte';
</script>

<StyleLoader url="https://cdn.ampproject.org/amp-story-player-v0.css"/>
<ScriptLoader url="https://cdn.ampproject.org/amp-story-player-v0.js"/>

<amp-story-player>
    <a href="stories/pets.html"
       style="--story-player-poster: url('./stories/assets/cover.jpg');"
       class="story">
        <span class="title">Joy of Pets</span>
    </a>
</amp-story-player>

<style>
    amp-story-player {
        width: 100vh;
        height: 100vw;
        max-width: 360px;
        max-height: 600px;
    }
</style>
