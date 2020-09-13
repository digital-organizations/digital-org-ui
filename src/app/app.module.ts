import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { CardListComponent } from './components/card/card-list/card-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {CardServiceService} from './components/card/services/card-service.service';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { CreateCardComponent } from './components/card/create-card/create-card.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { HomeComponent } from './components/home/home.component';
import {FormControl, Validators} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './components/login/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CreateCardComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MatCardModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatGridListModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    ClipboardModule,
  ],
  providers: [CardServiceService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
