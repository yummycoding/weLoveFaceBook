import { TestBed, async, inject } from '@angular/core/testing';

import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import { MockBackend } from '@angular/http/testing';
import { Http } from '@angular/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('AuthguardGuard', () => {

  let authguard: AuthguardGuard;
  let next: ActivatedRouteSnapshot;
  let state: RouterStateSnapshot;
  let user: UserService;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      providers: [AuthguardGuard, UserService, { provide: Http, deps: [MockBackend] }]
    }).compileComponents();
  });
  beforeEach(() => {
    authguard = TestBed.get(AuthguardGuard);
    user = TestBed.get(UserService);
  });

  it('should be created', inject([AuthguardGuard], (guard: AuthguardGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('be able to hit route when user is logged in', () => {
    user.setUserLoggedIn();
    expect(authguard.canActivate(next, state)).toBe(true);
  });

  it('not be able to hit route when user is not logged in', () => {
    user.setUserLoggedOut();
    expect(authguard.canActivate(next, state)).toBe(false);
  });
});

// describe('AuthguardGuard', () => {
  
//     it('true should be true', () => {
//       expect(true).toBe(true);
//     })
  
//   })