import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';
import { MockBackend } from '@angular/http/testing';
import { Http } from '@angular/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, {provide: Http, deps: [MockBackend]}]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
// describe('UserService', () => {
  
//     it('true should be true', () => {
//       expect(true).toBe(true);
//     })
  
//   })