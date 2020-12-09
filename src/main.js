import App from './App.svelte';

class WiKa extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'closed'});
        const style = document.createElement('style');

        style.textContent = `{{{###STYLES###}}}`;
        shadowRoot.appendChild(style);

        new App({
            target: shadowRoot,
            props: {},
        });
    }
}

customElements.define('coverified-wika', WiKa);
