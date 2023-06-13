import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueCalculatorComponent } from './value-calculator.component';

describe('ValueCalculatorComponent', () => {
  let component: ValueCalculatorComponent;
  let fixture: ComponentFixture<ValueCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
