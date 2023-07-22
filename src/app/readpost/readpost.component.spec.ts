import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadpostComponent } from './readpost.component';

describe('ReadpostComponent', () => {
  let component: ReadpostComponent;
  let fixture: ComponentFixture<ReadpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadpostComponent]
    });
    fixture = TestBed.createComponent(ReadpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
