import { Component, input } from '@angular/core';
import { ProfilePictureComponent } from "../profile-picture/profile-picture.component";

@Component({
  selector: 'app-name-card',
  standalone:true,
  imports: [ProfilePictureComponent],
  templateUrl: './name-card.component.html',
  styleUrl: './name-card.component.scss'
})
export class NameCardComponent {

  friend = input()

}
