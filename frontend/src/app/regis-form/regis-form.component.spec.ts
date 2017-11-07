import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RegisFormComponent } from './regis-form.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { User } from '../user';
import { FlashMessagesService, FlashMessagesModule } from 'angular2-flash-messages';
import { ValidateService } from '../validate.service';

describe('RegisFormComponent', () => {
  let component: RegisFormComponent;
  let fixture: ComponentFixture<RegisFormComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let backend: MockBackend = null;
  let user: UserService = null;
  let newUser = new User();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisFormComponent ],
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
  }));

  beforeEach(inject([UserService, MockBackend], (userService: UserService, mockBackend: MockBackend) => {
    user = userService;
    backend = mockBackend;
    fixture = TestBed.createComponent(RegisFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should send the signup request to the server', (done) => {
    backend.connections.subscribe((connection: MockConnection) => {
    let options = new ResponseOptions({
      body: JSON.stringify({ success: true })
    });
    connection.mockRespond(new Response(options));
  });

  user
    .create(newUser)
    .then(status => {
      expect(status).toEqual(true);
      done();
    });
  });

});
// describe('RegisFormComponent', () => {
  
//     it('true should be true', () => {
//       expect(true).toBe(true);
//     })
  
//   })