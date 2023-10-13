import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesFocusedComponent } from './technologies-focused.component';

describe('TechnologiesFocusedComponent', () => {
  let component: TechnologiesFocusedComponent;
  let fixture: ComponentFixture<TechnologiesFocusedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TechnologiesFocusedComponent]
    });
    fixture = TestBed.createComponent(TechnologiesFocusedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
