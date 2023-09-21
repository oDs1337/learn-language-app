import { Component, OnInit, inject, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Word } from '../shared/Interfaces/word';
import { ApiService } from '../services/api/api.service';
import * as _ from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})

export class LearnComponent implements OnInit {

  swedishWords: Word[] = [];
  currentWord = signal<Word>({word_single_indefinite: '', word_single_definite: '', word_plural_indefinite: '', word_plural_definite: '', word_plural_genitive: '', picture_url: ''});
  learnForm!: FormGroup;

  constructor(private _snackBar: MatSnackBar, private api: ApiService) {}

  ngOnInit(): void {
    this.getWords();
    this.createForm();
  }

  createForm(): void {
    this.learnForm = new FormGroup({
      word_single_indefinite: new FormControl('', [
        Validators.required,
        Validators.pattern(this.currentWord().word_single_indefinite),
      ]),
      word_single_definite: new FormControl('', [
        Validators.required,
        Validators.pattern(this.currentWord().word_single_definite),
      ]),
      word_plural_indefinite: new FormControl('', [
        Validators.required,
        Validators.pattern(this.currentWord().word_plural_indefinite),
      ]),
      word_plural_definite: new FormControl('', [
        Validators.required,
        Validators.pattern(this.currentWord().word_plural_definite),
      ]),
      word_plural_genitive: new FormControl('', [
        Validators.required,
        Validators.pattern(this.currentWord().word_plural_genitive),
      ])
    });
   }

  onSubmit(userAnswer: Word): void{
    if (this.checkCorrectness(userAnswer)) {
      this.getRandomWord();
      this.resetForm();
      this._snackBar.open('Correct!', 'Close' );
    } else {
       this._snackBar.open('Incorrect!', 'Close' );
    }
  }

  checkCorrectness(userAnswer: Word): boolean {
    userAnswer = {
      ...userAnswer,
      picture_url: this.currentWord().picture_url,
      _id: this.currentWord()._id,
    }
    return _.isEqual(userAnswer, this.currentWord());
  }

  resetForm(): void {
    this.learnForm.reset();
    this.learnForm.markAsUntouched();
    this.createForm();
  }

  getRandomWord(): void {
    const test = Math.floor(Math.random() * this.swedishWords.length);
    this.currentWord.set(this.swedishWords[1]);
  }

  getWords(): void {
    this.api.getAllWords().subscribe({
      next: (data: Word[]) => {
        this.swedishWords = data;
        this.currentWord.set(this.swedishWords[0]);
        this.resetForm();
      },
      error: (error: Error) => { console.error(error); },
    });
  }
}

