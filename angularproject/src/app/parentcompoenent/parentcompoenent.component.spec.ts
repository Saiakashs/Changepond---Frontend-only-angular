import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcompoenentComponent } from './parentcompoenent.component';

describe('ParentcompoenentComponent', () => {
  let component: ParentcompoenentComponent;
  let fixture: ComponentFixture<ParentcompoenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentcompoenentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentcompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
