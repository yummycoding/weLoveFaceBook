import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { FriendlistComponent } from './friendlist.component';

describe('FriendlistComponent', () => {
  let component: FriendlistComponent;
  let fixture: ComponentFixture<FriendlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendlistComponent ],
      imports: [ MaterialModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
// describe('FriendlistComponent', () => {
  
//     it('true should be true', () => {
//       expect(true).toBe(true);
//     })
  
//   })