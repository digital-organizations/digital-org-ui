import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Card} from '../model/card';
import {Email} from '../model/email';
import {FormControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  /*private postemailUrl: string;
  constructor(private http: HttpClient) {
    this.postemailUrl = 'https://digital-org.herokuapp.com//email-validate/';
  }

  public save(email: FormControl){
    return this.http.post<Card>(this.postemailUrl, "kavana.tad@gmail.com");
  }*/
}
