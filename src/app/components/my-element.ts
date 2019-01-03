import {
  LitElement,
  html
} from "@polymer/lit-element";

class Inner extends LitElement {
  render() {
    return html`
      Hello world
    `;
  }
}

customElements.define("x-inner", Inner);

class MyElement extends LitElement {
  foo: string;
  nug: number[];
  whales: number;
  bar: any;
  fooBar: any;
  _inner: any;
  static get properties() {
    return {
      nug: {},
      zot: {},
      foo: {},
      bar: {},
      whales: { type: Number },
      fooBar: {
        converter: {
          fromAttribute: parseInt,
          toAttribute: value => value + "-attr"
        },
        reflect: true
      }
    };
  }
  // a custom getter/setter can be created to customize property processing
  get zot() {
    return this.getAttribute("zot");
  }
  set zot(value) {
    this.setAttribute("zot", value);
    this.requestUpdate();
  }
  constructor() {
    super();
    this.foo = "foo";
    this.nug = [1, 2, 3];
    this.whales = 0;
    this.addEventListener("click", async e => {
      this.whales++;
      await this.updateComplete;
      this.dispatchEvent(
        new CustomEvent("whales", { detail: { whales: this.whales } })
      );
      console.log(this.shadowRoot.querySelector(".count").textContent);
    });
  }
  render() {
    const { foo, bar, whales, fooBar, nug } = this;
    return html`
      <style>
        :host {
          display: block;
        }
        :host([hidden]) {
          display: none;
        }
        .count {
          color: green;
        }
        .content {
          border: 1px solid black;
          padding: 8px;
        }
      </style>
      <h4 on-click="${e => console.log(this, e.target)}">
        Foo: ${foo}, Bar: ${bar}
      </h4>
      <div class="content"><slot></slot></div>
      <div class="count">whales: ${"🐳".repeat(whales)}</div>
      <ul>
        ${
          nug.map(
            n =>
              html`
                <li>${n}</li>
              `
          )
        }
      </ul>
      <x-inner></x-inner>
    `;
  }
  update(changedProps) {
    super.update(changedProps);
    console.log("updated!", changedProps);
  }
  firstUpdated() {
    this._inner = this.shadowRoot.querySelector("x-inner");
  }
  
}
customElements.define("my-element", MyElement);
declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
