import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { FriendsListComponent } from "../components/friends-list/friends-list.component";
import { MessagesComponent } from '../components/messages/messages.component';

@Component({
    selector: 'app-chatui',
    standalone:true,
    imports: [HeaderComponent, FriendsListComponent,MessagesComponent],
    templateUrl: './chatui.component.html',
    styleUrl: './chatui.component.scss'
})
export class ChatuiComponent {

}
