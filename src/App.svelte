<script>
    import {client, env, storyEndpoints} from './common';
    import {setClient} from 'svelte-apollo';
    import Entries from './Entries.svelte';
    import Story from './Story.svelte';
    import TagSelect from './TagSelect.svelte';
    import TagButtons from './TagButtons.svelte';
    import Layer from './Layer.svelte';
    import Article from './Article.svelte';

    let selectedTag = false;
    let moreClicks = 0;
    let layers = [];
    let layerClass = '';

    $: urls = selectedTag ? [`${storyEndpoints[env]}/tag/${selectedTag}`] : [];
    $: pageLoops = Array(moreClicks + 1);

    const onClick = item => {
        selectedTag = item.id;
    };

    const removeLayer = layer => {
        const index = layers.indexOf(layer);

        if (index !== -1) {
            layers.splice(index, 1);
            layers = [...layers]; // force new value
        }
    };

    const resetLayers = () => {
        layers = [];
        layerClass = '';
    };

    const clearLayers = () => {
        layerClass = 'closing';

        return resetLayers;
    }

    const openEntry = id => {
        layers = [
            ...layers,
            {
                type: 'article',
                id: id,
            }
        ]
    };

    const openTag = ({title, id}) => {
        layers = [
            ...layers,
            {
                type: 'tag',
                title: title,
                id: id,
            }
        ]
    };

    setClient(client);
</script>

<details class={layers.length ? 'no-scroll' : ''}>
    <main>
        <header>
            <svg role="presentation">
                <use xlink:href="#wika"></use>
            </svg>
            <h1>
                Wissenskanal
            </h1>
        </header>
        <Story {openEntry}/>
        <!--    TODO: refactor this to search UI-->
        <!--    <TagSelect bind:selected={selectedTag}/>-->
        <h2 class="arrow-indicator">
            Themen entdecken
        </h2>
        <TagButtons {openTag}/>
        <h2>
            Das bewegt Deutschland
        </h2>
        {#each pageLoops as _, i}
            <Entries tagFilter={selectedTag} page={i} {openEntry}/>
        {/each}
        <!--    <button on:click={()=>{moreClicks++}}>more</button>-->
        {#each layers as layer}
            <Layer onClose={()=>{removeLayer(layer)}} onClear={clearLayers} class={layerClass}>
                {#if layer.type === 'article'}
                    <Article id={layer.id} {openTag}/>
                {/if}
                {#if layer.type === 'tag'}
                    <Entries tagFilter={layer.id} title={layer.title} {openTag} {openEntry}/>
                {/if}
            </Layer>
        {/each}
    </main>
    <summary>
        <div>
            <div class="wika">
                <svg role="presentation">
                    <use xlink:href="#wika"></use>
                </svg>
            </div>
            <span class="visually-hidden">
                WiKa - Wissenskanal
            </span>
            <div class="close">
                <svg role="presentation">
                    <use xlink:href="#close"></use>
                </svg>
            </div>
        </div>
    </summary>
</details>

<!--ICONS-->
<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1"
     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <symbol id="wika" viewBox="0 0 27.8 25" aria-labelledby="WiKa - Wissenskanal">
        <title>WiKa - Wissenskanal</title>
        <path clip-rule="evenodd"
              d="m22.8 1.6-5 14.5-3.7-9.9c-.5-1.2-1.9-1.9-3.1-1.4-.2.1-.4.1-.5.2-.5.2-.9.7-1 1.2l-3.3 9.8-1.6-4.5c-.5-1.2-1.9-1.9-3.1-1.4s-1.9 1.9-1.4 3.1l3.9 10.3c.4 1 1.4 1.6 2.4 1.5 1.1.1 2.1-.5 2.5-1.6l3.3-9.5 3.6 9.7c.4 1 1.4 1.6 2.4 1.5 1.1.1 2.1-.5 2.5-1.6l7.1-20.3c.4-1.2-.2-2.6-1.5-3-1.7-.5-3.1.2-3.5 1.4z"
              fill="#3f9" fill-rule="evenodd"/>
    </symbol>
    <symbol id="close" viewBox="0 0 24 24" aria-labelledby="Schließen" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </symbol>
    <symbol id="back" viewBox="0 0 24 24" aria-labelledby="Zurück" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </symbol>
    <symbol id="forward" viewBox="0 0 24 24" aria-labelledby="Gehe zu" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </symbol>
    <symbol id="search" viewBox="0 0 24 24" aria-labelledby="Suche" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </symbol>
</svg>

<style type="text/scss">
    :global(:host) {
        --color-primary: #003366;
        --color-tag-bg: #f0f0f0;
        --color-text: #011321;
        --color-text-muted: #677182;
        --color-text-on-primary: #ffffff;
        --max-height: calc(100vh - 10rem);
        --max-width: 420px;
        --offset: calc(.5rem + 2vw);

        all: unset;
        max-height: var(--max-height);
        overflow: hidden;
        width: calc(100vw - (2 * var(--offset)));
        max-width: var(--max-width);
        position: fixed;
        right: var(--offset);
        bottom: var(--offset);
        filter: drop-shadow(0 .2rem 1rem rgba(0, 0, 0, .5));
        display: flex;
        flex-direction: column;
        border-top-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
        box-sizing: border-box;
    }

    :global(*),
    :global(*:before),
    :global(*:after) {
        box-sizing: border-box;
    }

    details {
        --color-primary: #003366;
        --color-text-on-primary: #ffffff;
        --max-height: calc(100vh - 10rem);
        --offset: calc(0.5rem + 2vw);

        width: calc(100vw - (2 * var(--offset)));
        position: relative;
        padding-bottom: 3.25rem;
        background-color: #fff;
        max-width: 3.5rem;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
        margin-left: auto;
        border-top-left-radius: 1rem;

        > summary {
            overflow: hidden;
            position: fixed;
            top: 0;
            right: 0;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            border-top-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            z-index: 1;

            > div {
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                border-top-left-radius: 1rem;
                border-bottom-right-radius: 1rem;

                > .wika {
                    padding: 0.75rem 0.875rem;
                    background-color: var(--color-primary);
                    color: var(--color-text-on-primary);
                    border-top-left-radius: 1rem;
                    border-bottom-right-radius: 1rem;
                }

                > .close {
                    display: none;
                    padding: 0.75rem 0.875rem;
                }
            }

            &::-webkit-details-marker {
                display: none;
            }

            svg {
                height: 25px;
                width: 27.8px;
            }
        }

        &[open] {
            max-width: var(--max-width);

            > summary {
                position: sticky;
                top: 100%;
                height: 0;
                width: 100%;
                overflow: visible;

                > div {
                    background-color: #fff;
                    height: 3.25rem;

                    > .close {
                        display: block;
                    }
                }
            }
        }
    }

    main {
        font-size: 16px;
        color: var(--color-text);
        position: relative;
        height: 100%;
        width: 100%;
        max-height: 100%;
        max-width: 100%;
    }

    .no-scroll {
        overflow: hidden;
    }

    .visually-hidden {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }

    header {
        background-color: var(--color-primary);
        color: var(--color-text-on-primary);
        padding: 1rem;
        position: sticky;
        top: 0;
        z-index: 10;
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

    .arrow-indicator {
        position: relative;
        margin-top: 0;
        padding-top: 1.75em;
        z-index: 1;

        &:before,
        &:after {
            content: '';
            position: absolute;
            left: 50%;
            pointer-events: none;
        }

        &:before {
            top: 1.25rem;
            width: 1px;
            height: 1px;
            border: 2.5rem solid transparent;
            border-top-color: #fff;
            border-left-color: #fff;
            border-radius: 1.25rem;
            transform: translate(-50%, -50%) rotate(45deg);
        }

        &:after {
            top: -.25rem;
            width: 2rem;
            height: 2rem;
            color: #003366;
            transform: translate(-50%, -50%);
            background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cline x1='12' y1='5' x2='12' y2='19'%3E%3C/line%3E%3Cpolyline points='19 12 12 19 5 12'%3E%3C/polyline%3E%3C/svg%3E");
            background-size: 100% 100%;
        }
    }

    h2 {
        text-align: center;
        font-weight: 700;
        font-size: .8125rem;
        padding: .75em 0;
        margin: 1.75em 0 .75em 0;
    }
</style>
