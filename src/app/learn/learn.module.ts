import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { LearnComponent } from './learn.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    LearnComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    LearnComponent
  ]
})
export class LearnModule { }
