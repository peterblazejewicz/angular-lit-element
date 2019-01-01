export {};
declare global {
  export interface Window {
    WebComponents: {
      ready: boolean;
    };
  }
}
