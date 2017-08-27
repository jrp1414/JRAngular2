import { Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { LogInComponent } from './login.component';
import { UserSignUpComponent } from './user_signup.component';

export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LogInComponent},
    {path: 'signup', component: UserSignUpComponent}
];