import { Component, OnInit } from '@angular/core';
import { NameCardComponent } from '../name-card/name-card.component';

@Component({
  selector: 'app-friends-list',
  standalone:true,
  imports: [NameCardComponent],
  templateUrl: './friends-list.component.html',
  styleUrl: './friends-list.component.scss'
})
export class FriendsListComponent implements OnInit {

friendsList=["farzan","thor","nami","zoro","farzan","thor","nami","zoro","farzan","thor","nami","zoro"]

ngOnInit(): void {
  
}


}
