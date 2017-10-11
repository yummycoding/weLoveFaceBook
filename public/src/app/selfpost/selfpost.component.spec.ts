import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfpostComponent } from './selfpost.component';

describe('SelfpostComponent', () => {
  let component: SelfpostComponent;
  let fixture: ComponentFixture<SelfpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
