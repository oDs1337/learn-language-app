import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopNavBarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
  ],
  exports: [
    TopNavBarComponent,
  ]
})
export class SharedModule { }
