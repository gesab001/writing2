import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {BibleComponent} from './bible/bible.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [  
     {path: '', component: HomeComponent},
     {path: 'bible/:word', component: BibleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
