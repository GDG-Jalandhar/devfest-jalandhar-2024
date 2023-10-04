import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgJalandharComponent } from './gdg-jalandhar.component';

describe('GdgJalandharComponent', () => {
  let component: GdgJalandharComponent;
  let fixture: ComponentFixture<GdgJalandharComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GdgJalandharComponent]
    });
    fixture = TestBed.createComponent(GdgJalandharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
