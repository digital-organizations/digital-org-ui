import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../../shared/data.service';
import {Group} from '../../group/model/group';
import {Card} from '../../card/model/card';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private getgroupUrl: string;
  private postgroupUrl: string;
  private updategroupUrl: string;
  private getCardsinGroupUrl: string;
  private getAllgroupUrl: string;
  private emailGlobal = sessionStorage.getItem('emailGlobal');

  constructor(private http: HttpClient,
              private dataService: DataService) {
    this.getgroupUrl = 'https://digital-org.herokuapp.com//group/all/';
    this.postgroupUrl = 'https://digital-org.herokuapp.com//group/create';
    this.updategroupUrl = 'https://digital-org.herokuapp.com//group/update';
    this.getCardsinGroupUrl = 'https://digital-org.herokuapp.com//group/card-from-group/';
    this.getAllgroupUrl = 'https://digital-org.herokuapp.com//group/all/';
  }

  // tslint:disable-next-line:typedef
  public findAll(emailGlobal: string){
    console.log(this.emailGlobal);
    return this.http.post<Group[]>(this.getgroupUrl, this.emailGlobal);
  }
  // tslint:disable-next-line:typedef
  public save(group: Group){
    return this.http.post<Group>(this.postgroupUrl, group);
  }

  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  public update(group: Group){
    return this.http.patch(this.updategroupUrl, group);
  }

  public getCards(group_id:number) {
    return this.http.get<Card[]>(this.getCardsinGroupUrl.concat(String(group_id)));
  }
  public getAllGroup(){
    console.log("group in");
    console.log(this.emailGlobal);
    return this.http.get<Group[]>(this.getAllgroupUrl.concat(this.emailGlobal));
  }

}
