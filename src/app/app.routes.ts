import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
    { path: '', component: HomeComponent }, // Default route
    { path: 'room', component: RoomComponent },
    { path: 'about', component: AboutComponent },
    {path: 'login', component: LoginComponent},
    { path: 'info/:id', component: InfoComponent}
];
