import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Group} from "../model/group";
import {ActivatedRoute, Router} from "@angular/router";
import {GroupService} from "../services/group.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-remove-user-group',
  templateUrl: './remove-user-group.component.html',
  styleUrls: ['./remove-user-group.component.css']
})
export class RemoveUserGroupComponent implements OnInit {

  uploadForm: FormGroup;
  selectedFile: File;
  message: string;
  userEmail: string;
  emailGlobal:string;
  finalUrl:string;
  displayGroupUrl = 'https://digital-org.herokuapp.com//group/all/admin/';
  submitUrl = 'https://digital-org.herokuapp.com//group/user-from-group?groupId=';

  groups: Group[];
  group_id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    private httpClient: HttpClient,

  ) {
    this.emailGlobal = sessionStorage.getItem('emailGlobal');
  }

  setGroup(id: number){
    this.group_id = id;
  }
  displayGroups(){
    this.httpClient.get<Group[]>(this.displayGroupUrl + this.emailGlobal).subscribe(res => {
      this.groups = res;
    });

  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.finalUrl = this.submitUrl.concat(String(this.group_id));
    const dataset = {
      adminEmail: this.emailGlobal,
      groupId: this.group_id,
      userEmail: this.userEmail};
    this.httpClient.post(this.finalUrl, dataset).subscribe(res => {alert('User added to group'); this.gotoGroupList(); });

  }
  // tslint:disable-next-line:typedef
  gotoGroupList() {
    this.router.navigate(['/home/group/listCardsInGroup']);
  }

  ngOnInit(): void {
    this.displayGroups();
  }
}
