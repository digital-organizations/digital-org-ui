import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CardListComponent} from './components/card/card-list/card-list.component';
import {CreateCardComponent} from './components/card/create-card/create-card.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  { path: 'cards', component: CardListComponent },
  { path: 'addCard', component: CreateCardComponent},
  { path: 'home' , component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LoginComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
