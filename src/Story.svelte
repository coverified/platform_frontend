<script>
    import SourceName from './SourceName.svelte';
    import Button from './Button.svelte';
    import Loader from './Loader.svelte';

    import {gql} from 'apollo-boost';
    import {client} from './common';
    import {query} from 'svelte-apollo';

    // import Swiper core and required components
    import SwiperCore, {Navigation, Pagination, A11y, Autoplay} from 'swiper';
    import {Swiper, SwiperSlide} from 'swiper/svelte';

    export let openEntry;

    // install Swiper components
    SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

    $: data = query(client, {
        query: gql`
            {
                allEntries(
                     first: 5,
                     sortBy: publishDate_DESC,
                )
                {
                    source {
                      id,
                      name,
                    },
                    id,
                    publishDate
                    title,
                    image {
                      publicUrl,
                    },
                }
            }`
    });
</script>

<style type="text/scss" global>
    // Import Swiper styles
    @import 'scss/mixins/gradient';
    @import 'swiper/swiper';
    @import 'swiper/components/navigation/navigation';
    @import 'swiper/components/pagination/pagination';

    .story__container {
        --story-padding: 2.25rem;
        --swiper-theme-color: #fff;
        --swiper-navigation-size: var(--story-padding);

        height: 75vh;
        width: 100%;
        max-height: 32.8125rem;
    }

    .story__page {
        box-sizing: border-box;
        background-color: #aaa;
        color: #fff;
        padding: var(--story-padding);
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        &:before,
        &:after {
            content: '';
            display: block;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: .5;
        }

        &:before {
            @include smooth-gradient();

            height: 5rem;
        }

        &:after {
            @include smooth-gradient(#000, 'to top');

            height: 100%;
        }

        > * {
            z-index: 1;
        }
    }

    .story__page__img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 0;
    }

    .story__page__date {
        position: absolute;
        top: var(--story-padding);
        left: calc(var(--story-padding) / 2);
        font-size: .875rem;
        font-weight: 500;
    }

    .swiper-pagination {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        padding: calc(var(--story-padding) / 2) calc(var(--story-padding) / 2 - 3px);
    }

    .swiper-pagination-fraction,
    .swiper-pagination-custom,
    .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: auto;
        top: 0;
    }

    .swiper-pagination-bullet {
        height: 4px;
        border-radius: 2px;
        width: 100%;
        background: rgba(255, 255, 255, .4);
        margin: 0 3px;
        opacity: 1;
        position: relative;
        overflow: hidden;

        &:before {
            content: '';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            transform: scaleX(1);
            background: rgba(255, 255, 255, 1);
            transform-origin: left center;
        }
    }

    .swiper-pagination-bullet-active {
        &:before {
            animation-name: fill-left-to-right;
            animation-duration: 5s;
            animation-timing-function: linear;
        }

        ~ .swiper-pagination-bullet {
            &:before {
                transform: scaleX(0);
            }
        }
    }

    .swiper-button-prev,
    .swiper-button-next {
        top: auto;
        bottom: 0;
        margin-top: 0;
        height: calc(100% - var(--story-padding));

        &:after {
            display: none;
        }
    }

    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
        left: 0;
    }

    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
        right: 0;
    }

    @keyframes fill-left-to-right {
        0% {
            transform: scaleX(0);
        }
        100% {
            transform: scaleX(1);
        }
    }
</style>

{#await $data}
    <Loader/>
{:then result}
    <Swiper
            class="story__container"
            navigation
            autoplay={{ delay: 5000 }}
            touchReleaseOnEdges={true}
            pagination={{ clickable: true }}
    >
        {#each result.data.allEntries as item, index}
            <SwiperSlide class="story__page">
                {#if item.image && item.image.publicUrl}
                    <img class="story__page__img" src={item.image.publicUrl} alt={item.title}>
                {/if}
                <article>
                    <span class="story__page__date">
                        {new Date(item.publishDate).toLocaleDateString()}
                    </span>
                    {#if item.source && item.source.name}
                        <SourceName name={item.source.name}/>
                    {/if}
                    <h1>
                        {item.title}
                    </h1>
                    <Button onClick={()=>{openEntry(item.id)}}>Artikel lesen</Button>
                </article>
            </SwiperSlide>
        {/each}
    </Swiper>
{:catch error}
    <p>Error loading items: {error}</p>
{/await}
