import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligentSystemsLecComponent } from './intelligent-systems-lec.component';

describe('IntelligentSystemsLecComponent', () => {
  let component: IntelligentSystemsLecComponent;
  let fixture: ComponentFixture<IntelligentSystemsLecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelligentSystemsLecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelligentSystemsLecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
