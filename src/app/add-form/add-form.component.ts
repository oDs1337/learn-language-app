import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  addNewRecord!: FormGroup;

  ngOnInit(): void {
    this.addNewRecord = new FormGroup({
      word_single_indefinite: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(64),
      ]),
      word_single_definite: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(64),
      ]),
        word_plural_indefinite: new FormControl('', [
            Validators.required,
            Validators.minLength(1),
          Validators.maxLength(64),
        ]),
        word_plural_definite: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(64),
        ]),
        word_plural_genitive: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(64),
        ]),
        picture_url: new FormControl('', [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1024),
        ]),
    })
  }

  onSubmit(formValues: FormGroup<any>): void{
    console.log(formValues);
  }

  resetForm(): void {
    this.addNewRecord.reset();
  }
}
