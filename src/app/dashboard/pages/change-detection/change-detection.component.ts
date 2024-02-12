import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import TitleComponent from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `

    <app-title [title]="currentFramework()" ></app-title>


    <pre> {{ frameworkAsSignal() | json }} </pre>
    <pre> {{ frameworkAsProperty | json }} </pre>

  `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSignal().name}`
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  })

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016
  };

  constructor() {

    setTimeout(() => {
      console.log("Hecho");

      // this.frameworkAsProperty.name = ".NET framework ";
      this.frameworkAsSignal.update(value => {
        value.name = "React"; 


        return {...value}
      })



    }, 100);

  }
}
