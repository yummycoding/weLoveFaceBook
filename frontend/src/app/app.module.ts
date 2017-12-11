import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule, DateAdapter, NativeDateAdapter  } from '@angular/material';
import { UserService } from './service/user.service';
// validate
import { ValidateService } from './service/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthguardGuard } from './service/authguard.guard';
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
import { UserProfileComponent } from './user/user-profile/user-profile.component';
// file upload
import { AddFriendComponent } from './friendlist/friendlist.component';
import { AddCommentComponent } from './home/home.component';
import { AvatarPreviewComponent } from './user/user-profile/user-profile.component';
// make post
import { PostService } from './service/post.service';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { ActivityComponent } from './activity/activity.component';
import { SportComponent } from './activity/sport/sport.component';
import { CarpoolComponent } from './activity/carpool/carpool.component';
import { MarketplaceComponent } from './activity/marketplace/marketplace.component';
import { WeatherComponent } from './activity/weather/weather.component';
import { DocumentComponent } from './activity/document/document.component';

export const appRoutes: Routes = [
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
  {
    path: 'helpcenter',
    component: HelpcenterComponent
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
    UserProfileComponent,
    AddFriendComponent,
    AddCommentComponent,
    HelpcenterComponent,
    AvatarPreviewComponent,
    ActivityComponent,
    SportComponent,
    CarpoolComponent,
    MarketplaceComponent,
    WeatherComponent,
    DocumentComponent
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
  entryComponents: [
    AddFriendComponent,
    AddCommentComponent,
    AvatarPreviewComponent
  ],
  providers: [
    UserService, 
    AuthguardGuard, 
    ValidateService,
    PostService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
