import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { SelfpostComponent } from './selfpost.component';
import { UserService } from '../service/user.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { PostService } from '../service/post.service';
import { Post } from'../class/post';

describe('SelfpostComponent', () => {
  let component: SelfpostComponent;
  let fixture: ComponentFixture<SelfpostComponent>;
  let post = new Post();
  let selfPost: Array<Post> = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfpostComponent ],
      imports: [ MaterialModule, BrowserAnimationsModule ],
      providers: [
        UserService, MockBackend, BaseRequestOptions, PostService,
        {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backendInstance, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('refreshSelfposts() should get posts', () => {
    expect(component.refreshSelfposts(event)).toBeUndefined();
  
  });
  it('deleteSelfposts(0) should delete posts', () => {
    selfPost.push(post);
    //expect(component.deleteSelfposts(0)).toBeUndefined();
  
  });

  it('getMyPosts() should delete posts', () => {
    expect(component.getMyPosts("test")).toBeUndefined();
  
  });

  it('getMyPosts() should delete posts', () => {
    expect(component.getMyPosts("test")).toBeUndefined();
  
  });
});
// describe('SelfpostComponent', () => {
  
//     it('***should be created***', () => {
//       expect(true).toBe(true);
//     })
  
//   })