import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { MeasurementsComponent } from './measurements/measurements.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SupplyPointsComponent } from './supply-points/supply-points.component';
import { SupplyPointComponent } from './supply-point/supply-point.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreviousPeriodSummaryComponent } from './previous-period-summary/previous-period-summary.component';
import { CurrentPeriodSummaryComponent } from './current-period-summary/current-period-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    MeasurementsComponent,
    MeasurementComponent,
    NavbarComponent,
    SupplyPointsComponent,
    SupplyPointComponent,
    DashboardComponent,
    PreviousPeriodSummaryComponent,
    CurrentPeriodSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
