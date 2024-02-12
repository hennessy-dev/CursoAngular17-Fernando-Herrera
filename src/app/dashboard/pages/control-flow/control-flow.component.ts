import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import TitleComponent from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: `` 
})
export default class ControlFlowComponent {

  public showContent = signal(false);

  public toggleContent() {
    this.showContent.update( value  => !value )
  }

  public grade = signal<Grade>('A');

  public frameworks = signal([ 'Angular', 'Svelte', 'React', 'Vue', 'Qwik' ]);
  public frameworks2 = signal([]);

}
