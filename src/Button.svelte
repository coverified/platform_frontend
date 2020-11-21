<script>
    export let type = 'default';
</script>

<button class={`btn btn--${type}`}>
    <slot></slot>
</button>

<style type="text/scss">
    .btn {
        border-color: #33ff99;
        background: transparent;
        color: #fff;
        font-size: .875em;
        border-radius: 0;
        font-weight: 500;
        padding: .6em 1.5em;
        border-style: solid;
        border-width: 2px;

        &:focus,
        &:hover {
            background: #33ff99;
            color: #000;
            cursor: pointer;
        }
    }
</style>
