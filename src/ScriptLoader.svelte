<svelte:head>
    <script bind:this={file} src={url}/>
</svelte:head>

<script>
    import { onMount, createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();
    let file;

    export let url;

    onMount(async () => {
        file.addEventListener('load', () => {
            // TODO: prevent loading the same resource twice -> use stores to track loaded resources
            dispatch('loaded');
        })

        file.addEventListener('error', (event) => {
            console.error('file failed loading', event);
        });
    });
</script>
