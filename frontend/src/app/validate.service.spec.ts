import { TestBed, inject } from '@angular/core/testing';
import { User } from'./user';
import { ValidateService } from './validate.service';

describe('ValidateService', () => {
  let service: ValidateService;
  let user = new User();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateService]
    });
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
  }));

  it('validateLogin() should check login', inject([ValidateService], (service: ValidateService) => {
    expect(service.validateLogin(user)).toBeFalsy();
  }));
});
