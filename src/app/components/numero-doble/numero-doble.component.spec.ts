import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeroDobleComponent } from './numero-doble.component';

describe('NumeroDobleComponent', () => {
  let component: NumeroDobleComponent;
  let fixture: ComponentFixture<NumeroDobleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumeroDobleComponent]
    });
    fixture = TestBed.createComponent(NumeroDobleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
