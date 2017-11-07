import { TestBed, inject, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { UserService } from './user.service';
import { User } from'./user';

describe('UserService', () => {
  let backend: MockBackend; 
  let service: UserService;
  let user = new User();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService, MockBackend, BaseRequestOptions,
        {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backendInstance, defaultOptions);
      }, deps: [MockBackend, BaseRequestOptions]}]
    });
    backend = TestBed.get(MockBackend);
    service = TestBed.get(UserService);
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('create() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.create(user)).toBeDefined();
  }));

  it('destroy() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.destroy(user)).toBeDefined();
  }));

  it('updatePassword() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.updatePassword(user)).toBeDefined();
  }));

  it('updateEmail() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.updateEmail(user)).toBeDefined();
  }));

  it('getUserByUsername() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.getUserByUsername(user.username)).toBeDefined();
  }));

  it('getUserByUserID() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.getUserByUserID(user._id)).toBeDefined();
  }));

  it('getUser() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.getUser(user)).toBeDefined();
  }));

  it('getUsers() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.getUsers()).toBeDefined();
  }));

  it('loginUser() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.loginUser('123','123')).toBeDefined();
  }));

  it('getUserByUserEmail() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.getUserByUserEmail('123')).toBeDefined();
  }));

  it('updateFriend() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.updateFriend(user)).toBeDefined();
  }));

});
// describe('UserService', () => {
  
//     it('true should be true', () => {
//       expect(true).toBe(true);
//     })
  
//   })