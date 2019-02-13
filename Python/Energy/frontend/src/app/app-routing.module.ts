import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MeasurementsComponent } from './measurements/measurements.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { SupplyPointsComponent } from './supply-points/supply-points.component';
import { SupplyPointComponent } from './supply-point/supply-point.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth-guard';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'supply-points/:id',
    canActivate: [AuthGuard],
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
        path: 'measurements/:mid',
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
    component: SupplyPointsComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'measurements/:id',
  //   component: MeasurementComponent
  // },
  {
    path: '',
    redirectTo: '/supply-points',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
