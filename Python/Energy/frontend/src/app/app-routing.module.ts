import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  { path: '',
    redirectTo: '/test',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
