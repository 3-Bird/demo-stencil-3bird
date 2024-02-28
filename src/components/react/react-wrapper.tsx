// src/components/react-wrapper/react-wrapper.tsx
import { Component, Prop, h, Element, ComponentInterface, State } from '@stencil/core';
// @ts-ignore
import React from 'react';
// Import createRoot from react-dom/client
import { createRoot } from 'react-dom/client';
import MyReactComponent from './MyReactComponent';

@Component({
  tag: 'react-wrapper',
  shadow: false,
})
export class ReactWrapper implements ComponentInterface {
  @Prop() message: string;
  @Element() hostElement: HTMLElement; // Renamed to avoid confusion with the ref

  // Using State to force re-render once the container is ready
  @State() isContainerReady: boolean = false;

  // Creating a container element for the React component
  private containerElement?: HTMLDivElement;

  componentDidLoad() {
    // Ensure containerElement is created and appended
    this.ensureContainerElement();
    // Once the container is ready, render the React component
    if (this.containerElement) {
      const root = createRoot(this.containerElement);
      root.render(<MyReactComponent message={this.message} />);
    }
  }

  ensureContainerElement() {
    if (!this.containerElement) {
      // Create a container for the React component
      this.containerElement = document.createElement('div');
      this.hostElement.appendChild(this.containerElement);
      // Update state to re-render and apply React component
      this.isContainerReady = true;
    }
  }

  render() {
    // Render a placeholder div, which will be replaced by React content
    return <div></div>;
  }
}
