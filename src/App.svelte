<script>
    import { client } from "./common";
    import {setClient} from 'svelte-apollo';
    import Entries from './Entries.svelte';

    setClient(client);
</script>

<main>
    <Entries />
</main>

<style>
</style>
