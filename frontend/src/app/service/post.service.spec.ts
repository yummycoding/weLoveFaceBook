import { TestBed, inject, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, ResponseOptions } from '@angular/http';
import { PostService } from './post.service';
import { User } from'../class/user';
import { Post } from'../class/post';
import { Comment } from'../class/comment';

describe('PostService', () => {
  let backend: MockBackend; 
  let service: PostService;
  let user = new User();
  let post = new Post();
  let comment = new Comment();
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostService, MockBackend, BaseRequestOptions,
        {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
        return new Http(backendInstance, defaultOptions);
      }, deps: [MockBackend, BaseRequestOptions]}]
    });
    backend = TestBed.get(MockBackend);
    service = TestBed.get(PostService);
  });

  it('should be created', inject([PostService], (service: PostService, mockBackend: MockBackend) => {
    expect(service).toBeTruthy();
  }));

  it('getHomePosts() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => { 
      let options = new ResponseOptions({
        body: JSON.stringify({success: true})
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.getHomePosts(user)).toBeDefined();
  }));

  it('sendPosts() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.sendPost(post)).toBeDefined();
  }));

  it('deletePost() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.deletePost(post._id)).toBeDefined();
  }));


  it('getSelfPosts() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.getSelfPosts(post._id)).toBeDefined();
  }));

  it('addOrCancelLikePosts() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.addOrCancelLikePosts(post, user.username)).toBeDefined();
  }));


  it('updateComment() should send request to server', fakeAsync(() => {
    backend.connections.subscribe(connection => {
      let options = new ResponseOptions({
        body: JSON.stringify({ success: true })
      });
      connection.mockRespond(new Response(options));
    });
    tick();
    expect(service.updateComment(post)).toBeDefined();
  }));

});
