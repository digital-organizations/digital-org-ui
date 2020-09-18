import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public emailGlobal: string;
  private cardId: number;
  constructor(){
  }

  setemailGlobal (data) {
    this.emailGlobal = data;
  }
  getemailGlobal () {
    return this.emailGlobal;
  }
  getcardId(): number {
    return this.cardId;
  }

  setcardId(value: number) {
    this.cardId = value;
  }

}
