import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHComponent } from './user-h.component';

describe('UserHComponent', () => {
  let component: UserHComponent;
  let fixture: ComponentFixture<UserHComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserHComponent]
    });
    fixture = TestBed.createComponent(UserHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
