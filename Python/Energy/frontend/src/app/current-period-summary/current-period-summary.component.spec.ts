import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPeriodSummaryComponent } from './current-period-summary.component';

describe('CurrentPeriodSummaryComponent', () => {
  let component: CurrentPeriodSummaryComponent;
  let fixture: ComponentFixture<CurrentPeriodSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPeriodSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPeriodSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
