import { Component, input } from '@angular/core';

@Component({
  selector: 'app-receiverbubble',
  standalone:true,
  imports: [],
  templateUrl: './receiverbubble.component.html',
  styleUrl: './receiverbubble.component.scss'
})
export class ReceiverbubbleComponent {

  text=input();
}
