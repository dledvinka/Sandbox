import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasuredValueComponent } from './measured-value.component';

describe('MeasuredValueComponent', () => {
  let component: MeasuredValueComponent;
  let fixture: ComponentFixture<MeasuredValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasuredValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasuredValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
