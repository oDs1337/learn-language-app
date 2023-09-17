import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '', redirectTo:'add-form', pathMatch:'full'
  // },
  {
    path: 'add-form', loadChildren: () => import('./add-form/add-form.module').then(m => m.AddFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
