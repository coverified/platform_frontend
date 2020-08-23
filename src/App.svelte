<script>
    import {client, env, storyEndpoints} from './common';
    import {setClient} from 'svelte-apollo';
    import Entries from './Entries.svelte';
    import StoryPlayer from './StoryPlayer.svelte';
    import TagSelect from './TagSelect.svelte';
    import TagButtons from './TagButtons.svelte';

    let selectedTag = false;

    $: urls = selectedTag ? [`${storyEndpoints[env]}/tag/${selectedTag}`] : [];

    const onClick = item => {
        selectedTag = item.id;
    }

    setClient(client);
</script>

<main>
    <TagSelect bind:selected={selectedTag}/>
    <br>
    <TagButtons onClick={onClick}/>
    <br>
    <Entries tagFilter={selectedTag}/>
    <br>
    <StoryPlayer {urls}/>
</main>

<style>
</style>
