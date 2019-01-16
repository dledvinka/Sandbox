import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { SupplyPointsComponent } from './supply-points/supply-points.component';
import { SupplyPointComponent } from './supply-point/supply-point.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'supply-point/:id',
    children: [
      {
        path: 'detail',
        component: SupplyPointComponent
      },
      {
        path: 'measurements',
        component: MeasurementsComponent
      },
      {
        path: 'measurement/:mid',
        component: MeasurementComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'supply-points',
    component: SupplyPointsComponent
  },
  {
    path: '',
    redirectTo: '/supply-points',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
