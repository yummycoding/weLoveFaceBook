import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { LoginFormComponent } from './login-form.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { ValidateService } from '../validate.service';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let backend: MockBackend = null;
  let user: UserService = null;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [ MaterialModule, FormsModule, BrowserAnimationsModule, FlashMessagesModule ],
      providers: [
        UserService, MockBackend, BaseRequestOptions, FlashMessagesService, ValidateService, 
        {provide: Router,  useValue: mockRouter },
        {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backendInstance, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]}
      ]
    })
    .compileComponents();
  });

  beforeEach(inject([UserService, MockBackend], (userService: UserService, mockBackend: MockBackend) => {
    // user = TestBed.get(UserService);
    // backend = TestBed.get(MockBackend);
    user = userService;
    backend = mockBackend;
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('getUserLoggedIn() should return false after creation', () => {
    expect(user.getUserLoggedIn()).toBeFalsy();
  });

  it('should send the login request to the server', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
    let options = new ResponseOptions({
      body: JSON.stringify({ success: true })
    });
    connection.mockRespond(new Response(options));
  });

  user
    .loginUser( 'admin', 'admin' )
    .then(status => {
      expect(status).toEqual(true);
      done();
    });
  });

  // it('signinUser() should signin', () => {
  //   expect(component.loginUser(event)).toBeUndefined();
  // });

});
// describe('LoginFormComponent', () => {
  
//     it('true should be true', () => {
//       expect(true).toBe(true);
//     })
  
//   })