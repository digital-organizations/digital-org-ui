import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  private getcardsUrl: string;
  private postcardsUrl: string;
  constructor(private http: HttpClient) {
    this.getcardsUrl = 'https://digital-org.herokuapp.com/card/all/';
    this.postcardsUrl = 'https://digital-org.herokuapp.com/card/';
  }

  public findAll(): Observable<Card[]>{
    return this.http.get<Card[]>(this.getcardsUrl);
  }

  public save(card: Card){
    return this.http.post<Card>(this.postcardsUrl, card);
  }


}
