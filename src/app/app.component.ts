import { Component } from '@angular/core';
import './components/my-element';
import './components/ts-element';

@Component({
  selector: 'app-root',
  template: `
    <my-element bar="5" whales="5" foobar="17">Hi</my-element>
    <hr>
    <ts-element message="Yo" more-info="person"></ts-element>
  `,
  styles: []
})
export class AppComponent {
}
