<script>
</script>

<amp-story
        standalone
        title="Hello Story"
        publisher="The AMP Team"
        publisher-logo-src="https://picsum.photos/1200/1200"
        poster-portrait-src="https://picsum.photos/900/1200"
>
    <amp-story-page id="my-first-page">
        <amp-story-grid-layer template="fill">
            <amp-img
                    src="https://picsum.photos/900/1600"
                    width="900"
                    height="1600"
            >
            </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
            <h1>Hello, amp-story!</h1>
        </amp-story-grid-layer>
    </amp-story-page>
    <amp-story-page id="my-second-page">
        <amp-story-grid-layer template="fill">
            <amp-img
                    src="https://picsum.photos/900/1600"
                    width="900"
                    height="1600"
            >
            </amp-img>
        </amp-story-grid-layer>
        <amp-story-grid-layer template="vertical">
            <h1>The End</h1>
        </amp-story-grid-layer>
    </amp-story-page>
    <amp-story-bookend src="bookendv1.json" layout="nodisplay">
    </amp-story-bookend>
</amp-story>
