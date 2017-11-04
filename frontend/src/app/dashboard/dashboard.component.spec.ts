import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from '../home/home.component';
import { SelfpostComponent } from '../selfpost/selfpost.component';
import { FriendlistComponent } from '../friendlist/friendlist.component';
import { MaterialModule } from '@angular/material';
import { UserService } from '../user.service';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, HomeComponent, SelfpostComponent, FriendlistComponent ],
      imports: [ MaterialModule, BrowserAnimationsModule ],
      providers: [
        UserService, BaseRequestOptions, MockBackend,
        {provide: Http, useFactory: (backendInstance: MockBackend, defaultOptions: BaseRequestOptions) => {
          return new Http(backendInstance, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]}
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
// describe('DashboardComponent', () => {
  
//     it('***should be created***', () => {
//       expect(true).toBe(true);
//     })
  
//   })