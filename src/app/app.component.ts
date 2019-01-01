import { Component } from '@angular/core';
import './components/whale-element';

@Component({
  selector: 'app-root',
  template: `
    <whale-element whales="5">hi</whale-element>
  `,
  styles: []
})
export class AppComponent {
}
