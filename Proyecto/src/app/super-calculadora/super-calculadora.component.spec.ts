import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperCalculadoraComponent } from './super-calculadora.component';

describe('SuperCalculadoraComponent', () => {
  let component: SuperCalculadoraComponent;
  let fixture: ComponentFixture<SuperCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperCalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
