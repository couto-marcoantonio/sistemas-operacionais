import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeScreenComponent } from './home-screen/home-screen.component'; 
import { DownloadsComponent } from './downloads/downloads.component'; 
import { AboutComponent } from './about/about.component'; 
import { ContactComponent } from './contact/contact.component'; 
import { StatisticsComponent } from './statistics/statistics.component'; 

const routes: Routes = [
  { path: 'home-screen', component: HomeScreenComponent },
  { path: 'downloads', component: DownloadsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: '', redirectTo: '/home-screen', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
