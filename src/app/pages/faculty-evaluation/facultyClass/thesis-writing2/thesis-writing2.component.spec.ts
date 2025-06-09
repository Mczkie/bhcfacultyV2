import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisWriting2Component } from './thesis-writing2.component';

describe('ThesisWriting2Component', () => {
  let component: ThesisWriting2Component;
  let fixture: ComponentFixture<ThesisWriting2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThesisWriting2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThesisWriting2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
