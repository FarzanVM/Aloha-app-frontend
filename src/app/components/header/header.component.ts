import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    standalone:true,
    imports: [FontAwesomeModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    faCircleUser = faCircleUser;

}
