import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practicum2Component } from './practicum2.component';

describe('Practicum2Component', () => {
  let component: Practicum2Component;
  let fixture: ComponentFixture<Practicum2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practicum2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practicum2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
