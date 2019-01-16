import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyPointComponent } from './supply-point.component';

describe('SupplyPointComponent', () => {
  let component: SupplyPointComponent;
  let fixture: ComponentFixture<SupplyPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
