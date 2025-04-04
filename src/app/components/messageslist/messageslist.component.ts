import { Component } from '@angular/core';
import { msgs } from '../messages/dummyconvo';
import { SenderbubbleComponent } from '../senderbubble/senderbubble.component';
import { ReceiverbubbleComponent } from '../receiverbubble/receiverbubble.component';

@Component({
  selector: 'app-messageslist',
  standalone:true,
  imports: [SenderbubbleComponent,ReceiverbubbleComponent],
  templateUrl: './messageslist.component.html',
  styleUrl: './messageslist.component.scss'
})
export class MessageslistComponent {
  messages = msgs
}
