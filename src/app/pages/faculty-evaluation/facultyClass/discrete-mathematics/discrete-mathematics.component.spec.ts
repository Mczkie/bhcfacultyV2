import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscreteMathematicsComponent } from './discrete-mathematics.component';

describe('DiscreteMathematicsComponent', () => {
  let component: DiscreteMathematicsComponent;
  let fixture: ComponentFixture<DiscreteMathematicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscreteMathematicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscreteMathematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
