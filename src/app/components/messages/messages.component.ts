import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { msgs } from './dummyconvo';
import { SenderbubbleComponent } from '../senderbubble/senderbubble.component';
import { ReceiverbubbleComponent } from '../receiverbubble/receiverbubble.component';
import { MessageslistComponent } from "../messageslist/messageslist.component";

@Component({
  selector: 'app-messages',
  standalone:true,
  imports: [InputComponent,MessageslistComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  messages = msgs;


}
