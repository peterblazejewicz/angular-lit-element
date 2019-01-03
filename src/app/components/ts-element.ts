import { LitElement, property, html } from "@polymer/lit-element"
class TSElement extends LitElement {

  @property() message = 'Hi';

  @property(
      {attribute : 'more-info', converter: (value: string) => `[${value}]`})
  extra = '';

  render() {
    const {message, extra} = this;
    return html`
      <style>
        :host {
          display: block;
        }
      </style>TSElement says: ${message} ${extra}
    `;
  }
}
customElements.define('ts-element', TSElement);

declare global {
  interface HTMLElementTagNameMap {
      'ts-element': TSElement;
  }
}