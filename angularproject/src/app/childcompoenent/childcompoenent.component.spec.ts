import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcompoenentComponent } from './childcompoenent.component';

describe('ChildcompoenentComponent', () => {
  let component: ChildcompoenentComponent;
  let fixture: ComponentFixture<ChildcompoenentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildcompoenentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildcompoenentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
