import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo:'learn', pathMatch:'full'
  },
  {
    path: 'add-form', loadChildren: () => import('./add-form/add-form.module').then(m => m.AddFormModule)
  },
  {
    path: 'learn', loadChildren: () => import('./learn/learn.module').then(m => m.LearnModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
