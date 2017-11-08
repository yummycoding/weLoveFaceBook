import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { HeaderComponent } from './header.component';
import { UserService } from '../user.service';
import { Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ MaterialModule ],
      providers: [
        UserService,
        {provide: Http, deps: [MockBackend]},
        {provide: Router,  useValue: mockRouter },
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('logoutUser()should return to login page', (): void => {
    expect(component.logoutUser()).toBeUndefined();
  });

  it('setUserProfile()should return to profile page', (): void => {
    expect(component.setUserProfile()).toBeUndefined();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/userprofile']);
  });
});
// describe('HeaderComponent', () => {
  
//     it('true should be true', () => {
//       expect(true).toBe(true);
//     })
  
//   })