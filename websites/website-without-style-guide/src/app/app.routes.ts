import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'users', component: NotFoundComponent },
  { path: 'profile', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];
