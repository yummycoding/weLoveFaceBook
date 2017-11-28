// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
// import { MaterialModule } from '@angular/material';
// import { FriendlistComponent } from './friendlist.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { UserService } from '../service/user.service';
// import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
// import { MockBackend, MockConnection } from '@angular/http/testing';

// describe('FriendlistComponent', () => {
//   let component: FriendlistComponent;
//   let fixture: ComponentFixture<FriendlistComponent>;



//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ FriendlistComponent ],
//       imports: [ MaterialModule, FormsModule],
//       providers: [ UserService,
//         {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
//           return new Http(backendInstance, defaultOptions);
//         }, deps: [MockBackend, BaseRequestOptions]}, MockBackend, BaseRequestOptions ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(inject([UserService, MockBackend], (userService: UserService, mockBackend: MockBackend) => {
//     fixture = TestBed.createComponent(FriendlistComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   }));

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
// // describe('FriendlistComponent', () => {
  
// //     it('true should be true', () => {
// //       expect(true).toBe(true);
// //     })
  
// //   })