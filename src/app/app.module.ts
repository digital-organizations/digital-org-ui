import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {CardListComponent} from './components/card/card-list/card-list.component';
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
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { HomeComponent } from './components/home/home.component';
import {FormControl, Validators} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import {AuthService} from './components/login/auth.service';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import { GroupComponent } from './components/group/group/group.component';
import {DataService} from './shared/data.service';
import {CardListDialogComponent} from './components/card/card-list-dialog/card-list-dialog.component';
import { CardListUpdateComponent } from './components/card/card-list-update/card-list-update.component';
import { ShareUrlComponent } from './components/card/share-url/share-url.component';
import { SuggestionBoxComponent } from './components/card/suggestion-box/suggestion-box.component';
import { UpdateImageComponent } from './components/card/update-image/update-image.component';
import { CreateGroupComponent } from './components/group/create-group/create-group.component';
import { GroupListComponent } from './components/group/group-list/group-list.component';
import { CardInGroupListComponent } from './components/group/card-in-group-list/card-in-group-list.component';
import { CreateCardInGroupComponent } from './components/group/create-card-in-group/create-card-in-group.component';
import { CardComponent } from './components/card/card/card.component';
import { SuggestionListComponent } from './components/card/suggestion-list/suggestion-list.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { GroupUpdateComponent } from './components/group/group-update/group-update.component';
import { DeleteCardFromGroupComponent } from './components/group/delete-card-from-group/delete-card-from-group.component';
import { AddUserGroupComponent } from './components/group/add-user-group/add-user-group.component';
import { RemoveUserGroupComponent } from './components/group/remove-user-group/remove-user-group.component';



@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CreateCardComponent,
    HomeComponent,
    LoginComponent,
    LandingPageComponent,
    GroupComponent,
    CardListDialogComponent,
    CardListUpdateComponent,
    ShareUrlComponent,
    SuggestionBoxComponent,
    UpdateImageComponent,
    CreateGroupComponent,
    GroupListComponent,
    CardInGroupListComponent,
    CreateCardInGroupComponent,
    CardComponent,
    SuggestionListComponent,
    GroupUpdateComponent,
    DeleteCardFromGroupComponent,
    AddUserGroupComponent,
    RemoveUserGroupComponent,

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
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatTableModule,
  ],
  providers: [CardServiceService , AuthService, MatDatepickerModule, DataService],
  bootstrap: [AppComponent],
  entryComponents: [CardListDialogComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
