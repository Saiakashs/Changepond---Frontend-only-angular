import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonimageComponent } from './buttonimage.component';

describe('ButtonimageComponent', () => {
  let component: ButtonimageComponent;
  let fixture: ComponentFixture<ButtonimageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonimageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
