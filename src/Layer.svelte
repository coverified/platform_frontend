<script>
    let closing = false;

    export let type = 'default';
    export let onClose;
    export let onClear;

    const onBackClick = () => {
        closing = true;

        setTimeout(() => {
            if (typeof onClose === 'function') {
                onClose();
            }
        }, 250);
    }

    const onClearClick = () => {
        let onAfterClearAnimation;

        closing = true;
        if (typeof onClear === 'function') {
            onAfterClearAnimation = onClear();
        }
        setTimeout(() => {
            if (typeof onAfterClearAnimation === 'function') {
                onAfterClearAnimation();
            }
        }, 250);
    }
</script>

<section class={`layer layer--${type} ${$$props.class} ${closing ? 'closing' : ''}`}>
    <header>
        <button on:click={onBackClick}>
            <svg role="presentation">
                <use xlink:href="#back"></use>
            </svg>
        </button>
        <button on:click={onClearClick}>
            <svg role="presentation">
                <use xlink:href="#close"></use>
            </svg>
        </button>
    </header>
    <main>
        <slot></slot>
    </main>
</section>

<style type="text/scss">
    .layer {
        display: block;
        top: 60px;
        position: absolute;
        height: calc(100% - 60px);
        width: 100%;
        background-color: #fff;
        z-index: 10;
        border-top-left-radius: 1.5rem;
        border-top-right-radius: 1.5rem;
        animation-name: reveal-from-bottom;
        animation-duration: .42s;
        animation-timing-function: ease-out;

        &.closing {
            transition: transform .25s ease-out;
            transform: translateY(100%);
        }
    }

    header {
        border-bottom: 1px solid rgba(0, 0, 0, .3);
        padding: .33rem .66rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button {
        border: 0;
        background: transparent;
        font-size: 1.125rem;
        line-height: 1;
        margin: 0;
        display: flex;
        cursor: pointer;

        > svg {
            width: 1.5em;
            height: 1.5em;
        }
    }

    main {
        height: 100%;
        width: 100%;
        overflow: auto;
        padding: 1.5rem 1rem;
    }

    @keyframes reveal-from-bottom {
        0% {
            transform: translateY(100%);
        }
        100% {
            transform: translateY(0);
        }
    }
</style>
