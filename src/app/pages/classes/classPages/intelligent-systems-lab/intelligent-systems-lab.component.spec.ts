import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligentSystemsLabComponent } from './intelligent-systems-lab.component';

describe('IntelligentSystemsLabComponent', () => {
  let component: IntelligentSystemsLabComponent;
  let fixture: ComponentFixture<IntelligentSystemsLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelligentSystemsLabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelligentSystemsLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
