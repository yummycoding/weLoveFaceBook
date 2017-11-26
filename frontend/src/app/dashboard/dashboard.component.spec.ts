// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DashboardComponent } from './dashboard.component';
// import { HomeComponent } from '../home/home.component';
// import { SelfpostComponent } from '../selfpost/selfpost.component';
// import { FriendlistComponent } from '../friendlist/friendlist.component';
// import { MaterialModule } from '@angular/material';
// import { UserService } from '../service/user.service';
// import { PostService } from '../service/post.service';
// import { Http, BaseRequestOptions } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
// import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
// import { Router, RouterModule } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';

// describe('DashboardComponent', () => {
//   let component: DashboardComponent;
//   let fixture: ComponentFixture<DashboardComponent>;
//   let mockRouter = {
//     navigate: jasmine.createSpy('navigate')
//   };

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ DashboardComponent, HomeComponent, SelfpostComponent, FriendlistComponent ],
//       imports: [ MaterialModule, BrowserAnimationsModule, FormsModule ],
//       providers: [
//         UserService, BaseRequestOptions, MockBackend, PostService,
//         {provide: Router,  useValue: mockRouter },
//         {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
//           return new Http(backendInstance, defaultOptions);
//         }, deps: [MockBackend, BaseRequestOptions]}
//     ],
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(DashboardComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
// // describe('DashboardComponent', () => {
  
// //     it('***should be created***', () => {
// //       expect(true).toBe(true);
// //     })
  
// //   })