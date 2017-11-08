import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { AddCommentComponent } from './home.component';
import { UserService } from '../user.service';
import { PostService } from '../post.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Post } from'../post';
import { Comment } from'../comment';
//import { MdDialog, MdDialogModule, MdDialogRef} from '@angular/material';

describe('HomeComponent', () => {
  let component: HomeComponent;
  //let commentcomponent: AddCommentComponent;
  let fixture: ComponentFixture<HomeComponent>;
  //let fixture1: ComponentFixture<AddCommentComponent>;
  let post = new Post();
  let homePosts: Array<Post> = [];
  let comment = new Comment();
  //let dialog: MdDialog;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent],
      imports: [ MaterialModule, BrowserAnimationsModule, FormsModule ],
      providers: [
        UserService, MockBackend, BaseRequestOptions, PostService,
        {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backendInstance, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]}
      ]
    })
    // .overrideModule(BrowserDynamicTestingModule, {
    //   set: {
    //     entryComponents: [ AddCommentComponent],
    //   },
    // })
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    //fixture1 = TestBed.createComponent(AddCommentComponent);
    component = fixture.componentInstance;
    //commentcomponent= fixture1.componentInstance;
    fixture.detectChanges();
    //fixture1.detectChanges();
    //dialog = TestBed.get(MdDialog);
    //let dialogRef = dialog.open(AddCommentComponent);
    //commentcomponent = dialogRef.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('sendPost() should send request to the server', () => {
    expect(component.sendPost()).toBeUndefined();
  
  });
  it('getHomeposts() should send request to the server', () => {
    expect(component.getHomeposts()).toBeUndefined();
  
  });

  it('likeCancelLikePost() should send request to the server', () => {
    homePosts.push(post);
    expect(component.likeCancelLikePost(0)).toBeUndefined();
  
  });

  // it('pageChange() should send request to the server', () => {
    
  //   expect(component.pageChange(event)).toBeUndefined();
  
  // });

  // it('deleteComment() should send request to the server', () => {
  //   homePosts.push(post);
  //   let commentedpost = homePosts[0]; 
    
  //   expect(component.deleteComment(comment,0)).toBeUndefined();
  
  // });

});
// describe('HomeComponent', () => {
  
//     it('***should be created***', () => {
//       expect(true).toBe(true);
//     })
  
//   })