import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { SelfpostComponent } from './selfpost.component';
import { UserService } from '../user.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { PostService } from '../post.service';

describe('SelfpostComponent', () => {
  let component: SelfpostComponent;
  let fixture: ComponentFixture<SelfpostComponent>;

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
});
// describe('SelfpostComponent', () => {
  
//     it('***should be created***', () => {
//       expect(true).toBe(true);
//     })
  
//   })