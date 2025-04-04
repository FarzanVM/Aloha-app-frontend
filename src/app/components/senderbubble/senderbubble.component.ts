import { Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-senderbubble',
  standalone:true,
  imports: [FontAwesomeModule],
  templateUrl: './senderbubble.component.html',
  styleUrl: './senderbubble.component.scss'
})
export class SenderbubbleComponent {

  text = input()
  doubleCheck = faCheckDouble;
}
