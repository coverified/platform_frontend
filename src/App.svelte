<script>
    import {client} from './common';
    import {setClient} from 'svelte-apollo';
    import Entries from './Entries.svelte';
    import StoryPlayer from './StoryPlayer.svelte';
    import TagSelect from './TagSelect.svelte';
    import TagButtons from './TagButtons.svelte';

    let selectedTag = false;

    const onClick = item => {
        selectedTag = item.name;
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
    <StoryPlayer/>
</main>

<style>
</style>
