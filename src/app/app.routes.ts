import { Routes } from '@angular/router';
import { CarlistComponent } from './components/carlist/carlist.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', component: CarlistComponent },
    { path: 'about', component: AboutComponent },
];
