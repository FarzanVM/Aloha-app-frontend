import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-homepage',
    standalone:true,
    imports: [RouterOutlet],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}
