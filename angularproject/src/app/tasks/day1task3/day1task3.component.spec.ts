import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day1task3Component } from './day1task3.component';

describe('Day1task3Component', () => {
  let component: Day1task3Component;
  let fixture: ComponentFixture<Day1task3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day1task3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Day1task3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
