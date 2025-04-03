import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";

@Component({
  selector: 'app-chatui',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './chatui.component.html',
  styleUrl: './chatui.component.scss'
})
export class ChatuiComponent {

}
