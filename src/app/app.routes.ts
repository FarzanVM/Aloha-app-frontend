import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './homepage/login/login.component';
import { SignupComponent } from './homepage/signup/signup.component';
import { ChatuiComponent } from './chatui/chatui.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent,
        children:[
            {
                path:'',
                component:LoginComponent
            },
            {
                path:'signup',
                component:SignupComponent
            }
        ]
    },
    {
        path:'chatapp',
        component:ChatuiComponent
    }
];
