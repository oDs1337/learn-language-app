import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddFormRoutingModule } from './add-form-routing.module';
import { AddFormComponent } from './add-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AddFormComponent
  ],
  imports: [
    CommonModule,
    AddFormRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    AddFormComponent
  ]
})
export class AddFormModule { }
