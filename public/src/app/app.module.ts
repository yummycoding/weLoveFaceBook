import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http, HttpModule } from '@angular/http';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule, DateAdapter, NativeDateAdapter  } from '@angular/material';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';

import 'hammerjs';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component'; // copyright component, used in all pages
// components for dashboard (homepage)
import { HeaderComponent } from './dashboard/header/header.component';
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
  }
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
    RegisFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
