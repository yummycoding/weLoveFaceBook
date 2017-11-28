import { TestBed, inject } from '@angular/core/testing';
import { User } from'../class/user';
import { ValidateService } from './validate.service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, ResponseOptions } from '@angular/http';

describe('ValidateService', () => {
  let service: ValidateService;
  let user = new User();
  let backend: MockBackend; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateService, MockBackend, BaseRequestOptions,
        {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backendInstance, defaultOptions);
      }, deps: [MockBackend, BaseRequestOptions]}]
    });
    backend = TestBed.get(MockBackend);
    // TestBed.configureTestingModule({
    //   providers: [ValidateService]
    // });
    service = TestBed.get(ValidateService);
  });

  it('should be created', inject([ValidateService], (service: ValidateService) => {
    expect(service).toBeTruthy();
  }));

  it('validateEmail() should check email format', inject([ValidateService], (service: ValidateService) => {
    expect(service.validateEmail("zhou@zhou.com")).toBeTruthy();
  }));

  it('validateRegister() should check register', inject([ValidateService], (service: ValidateService) => {
    expect(service.validateRegister(user)).toBeFalsy();
    let userTwo = new User();
    userTwo.nickname = "123",
    userTwo.email = "123",
    userTwo.username = "123",
    userTwo.password = "123",
    userTwo.dob = "123"
    expect(service.validateRegister(userTwo)).toBeTruthy();
 
  }));

  it('validateLogin() should check login', inject([ValidateService], (service: ValidateService) => {
    expect(service.validateLogin(user)).toBeFalsy();
    let userTwo = new User();
    userTwo.username = "123";
    userTwo.password = "123";
    expect(service.validateLogin(userTwo)).toBeTruthy();
  }));
});
