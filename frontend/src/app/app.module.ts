import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule, DateAdapter, NativeDateAdapter  } from '@angular/material';
import { UserService } from './user.service';
// validate
import { ValidateService } from './validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthguardGuard } from './authguard.guard';
import { FormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component'; // copyright component, used in all pages
import { HeaderComponent } from './header/header.component';

// components for dashboard (homepage)
import { DashboardComponent } from './dashboard/dashboard.component';
// components for login
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginHeaderComponent } from './login-form/login-header/login-header.component';
// components for Mypost tabs
import { SelfpostComponent } from './selfpost/selfpost.component';
// components for friendlist tab
import { FriendlistComponent } from './friendlist/friendlist.component';
// components for home tab
import { HomeComponent } from './home/home.component';
import { RegisFormComponent } from './regis-form/regis-form.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
// file upload


const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: 'regis-form',
    component: RegisFormComponent
  },
  {
    path: 'userprofile',
    component: UserProfileComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    LoginHeaderComponent,
    SelfpostComponent,
    FriendlistComponent,
    HomeComponent,
    RegisFormComponent,
    UserComponent,
    UserListComponent,
    UserNewComponent,
    UserEditComponent,
    UserProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    MdDatepickerModule,
    MdNativeDateModule,
    FormsModule,
    FlashMessagesModule
  ],
  providers: [UserService, AuthguardGuard, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
