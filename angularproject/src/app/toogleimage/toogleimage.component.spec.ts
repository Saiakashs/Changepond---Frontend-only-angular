import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToogleimageComponent } from './toogleimage.component';

describe('ToogleimageComponent', () => {
  let component: ToogleimageComponent;
  let fixture: ComponentFixture<ToogleimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToogleimageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToogleimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
