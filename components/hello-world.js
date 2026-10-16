// Custom Element #2: <hello-world>
// Logs a message to the browser console when the tag is placed on a page.
// It does not touch the DOM (no innerHTML, no shadow root, no attributes).
class HelloWorld extends HTMLElement {
  connectedCallback() {
    console.log("Hello World!");
  }
}

customElements.define("hello-world", HelloWorld);
