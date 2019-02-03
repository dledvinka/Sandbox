import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousPeriodSummaryComponent } from './previous-period-summary.component';

describe('PreviousPeriodSummaryComponent', () => {
  let component: PreviousPeriodSummaryComponent;
  let fixture: ComponentFixture<PreviousPeriodSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousPeriodSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousPeriodSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
