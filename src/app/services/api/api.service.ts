import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Word } from 'src/app/shared/Interfaces/word';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllWords(): Observable<Word[]> {
    return this.http.get<Word[]>(`${environment.apiUrl}/get_all_words`);
  }

  postWord(payload: Word) {
    return this.http.post<Word>(`${environment.apiUrl}/add_word`, payload);
  }
}
