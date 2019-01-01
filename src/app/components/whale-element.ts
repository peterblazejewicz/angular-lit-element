import { LitElement, html, property, customElement } from '@polymer/lit-element';

@customElement('whalte-element')
class WhaleElement extends LitElement {

    @property()
    foo = 'foo';

    @property({
        type: Number,
    })
    whales: 5;

    constructor() {
        super();
        this.whales++;
        async () => {
            await this.updateComplete;
            this.dispatchEvent(new CustomEvent('whales', {detail: {whales: this.whales}}))
        }
    }

    // Render method should return a `TemplateResult` using the provided lit-html `html` tag function
    render() {
        return html`
        <style>
            :host {
            display: block;
            }
            :host([hidden]) {
            display: none;
            }
        </style>
        <h4>Foo: ${this.foo}</h4>
        <div>whales: ${'🐳'.repeat(this.whales)}</div>
        <slot></slot>
        `;
    }
}
