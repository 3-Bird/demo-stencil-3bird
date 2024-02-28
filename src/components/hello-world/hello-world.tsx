import { Component, h } from '@stencil/core';

@Component({
  tag: 'hello-world', // This is the custom element tag you will use in HTML
  styleUrl: 'hello-world.css', // Link to the CSS file (optional)
  shadow: true // Use Shadow DOM for encapsulation
})
export class HelloWorld {
  render() {
    return <div>Hello, World!</div>;
  }
}
