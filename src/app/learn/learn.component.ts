import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  learnForm!: FormGroup;

  ngOnInit(): void {
    this.learnForm = new FormGroup({
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
    })
  }

  onSubmit(formValues: FormGroup<any>): void{
    console.log(formValues);
  }

  resetForm(): void {
    this.learnForm.reset();
  }
}
