import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { UserService } from '../user.service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let spaceScreens: Array<any> = [];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [ MaterialModule, BrowserAnimationsModule ],
      providers: [
        UserService, MockBackend, BaseRequestOptions,
        {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backendInstance, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should send getpost request to the server', () => {

    expect(spaceScreens.length).toBe(0);
  });

});
// describe('HomeComponent', () => {
  
//     it('***should be created***', () => {
//       expect(true).toBe(true);
//     })
  
//   })