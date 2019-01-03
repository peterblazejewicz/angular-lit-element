export {};
declare global {
  export interface Window {
    WebComponents: {
      ready: boolean;
    };
    ShadyCSS?: ShadyCSS;
    ShadyDOM?: ShadyDOM;
  }
}
export interface ShadyCSS {
  styleElement(host: Element, overrideProps?: { [key: string]: string }): void;
  getComputedStyleValue(element: Element, property: string): string;
}

export interface ShadyDOM {
  inUse: boolean;
}
