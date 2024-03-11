import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calculdora2Component } from './calculdora2.component';

describe('Calculdora2Component', () => {
  let component: Calculdora2Component;
  let fixture: ComponentFixture<Calculdora2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calculdora2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calculdora2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
