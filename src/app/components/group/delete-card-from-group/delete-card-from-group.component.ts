import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../services/group.service';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DataService} from '../../../shared/data.service';
import {Card} from '../../card/model/card';
import {Group} from '../model/group';

@Component({
  selector: 'app-delete-card-from-group',
  templateUrl: './delete-card-from-group.component.html',
  styleUrls: ['./delete-card-from-group.component.css']
})
export class DeleteCardFromGroupComponent implements OnInit {

  uploadForm: FormGroup;
  selectedFile: File;
  message: string;
  emailGlobal: string;
  displayCardsUrl='https://digital-org.herokuapp.com/card/all/admin';
  displayGroupUrl='https://digital-org.herokuapp.com/group/all/admin/';
  submitUrl='https://digital-org.herokuapp.com/group/remove-card-from-group';
  cards:Card[];
  groups:Group[];
  card_id:number;
  group_id:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private dataService: DataService,

  ) {
    this.emailGlobal = sessionStorage.getItem('emailGlobal');
  }

  setGroup(id:number){
    this.group_id = id;
  }

  setCard(id:number){
    this.card_id = id;
  }



  // tslint:disable-next-line:typedef
  displayCards() {
    this.httpClient.post<Card[]>(this.displayCardsUrl, this.emailGlobal).subscribe(res => {
      this.cards = res;
    });
  }

  displayGroups(){
    this.httpClient.get<Group[]>(this.displayGroupUrl + this.emailGlobal).subscribe(res=>{
      this.groups = res;
    })

  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    const dataset = {'added_by': this.emailGlobal, 'card_id': this.card_id, 'group_id': this.group_id};
    this.httpClient.post(this.submitUrl,dataset).subscribe(res=>{this.gotoGroupList()});

  }
  // tslint:disable-next-line:typedef
  gotoGroupList() {
    this.router.navigate(['/home/group/listCardsInGroup']);
  }

  ngOnInit(): void {
    this.displayCards();
    this.displayGroups();
  }
}
