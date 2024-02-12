import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl mb-5 font-extrabold text-center">{{ title }} - {{ withShadow }}</h1>
  `,
  styles: ``
})

export default class TitleComponent {
  @Input({ required: true }) title: string = '';
  @Input({ transform: booleanAttribute  }) withShadow: boolean = false;
}