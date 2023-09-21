import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from 'src/app/shared/Interfaces/word';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllWords(): Observable<Word[]> {
    return this.http.get<Word[]>('http://127.0.0.1:8000/get_all_words',);
   }
}
