import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypadComponentComponent } from './keypad-component.component';

describe('KeypadComponentComponent', () => {
  let component: KeypadComponentComponent;
  let fixture: ComponentFixture<KeypadComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeypadComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypadComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
