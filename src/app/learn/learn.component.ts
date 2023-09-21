import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Word } from '../shared/Interfaces/word';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {

  swedishWords: Word[] = [
	{
		"_id": {
			"$oid": "650c4325709b953b2bfbbeb8"
		},
		"word_single_indefinite": "en katt",
		"word_single_definite": "katten",
		"word_plural_indefinite": "katter",
		"word_plural_definite": "katterna",
		"word_plural_genitive": "katternas",
		"picture_url": "https://mojnorweski.pl/assets/dictionary/images/960/kate.jpg"
	}
]
  learnForm!: FormGroup;

  ngOnInit(): void {
    this.learnForm = new FormGroup({
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
        ])
    })
  }

  onSubmit(formValues: FormGroup<any>): void{
    console.log(formValues);
  }

  resetForm(): void {
    this.learnForm.reset();
  }
}
