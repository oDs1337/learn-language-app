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
      word: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(64),
      ]),
      wordPlural: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(64),
      ]),
      pictureUrl: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1024),
      ]),
    })
  }

  onSubmit(formValues: any): void{
    console.log(formValues);
  }

  resetForm(): void {
    this.addNewRecord.reset();
  }
}
