import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardetails2Component } from './cardetails2.component';

describe('Cardetails2Component', () => {
  let component: Cardetails2Component;
  let fixture: ComponentFixture<Cardetails2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cardetails2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cardetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
