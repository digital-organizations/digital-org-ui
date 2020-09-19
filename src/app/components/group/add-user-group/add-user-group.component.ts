import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Card} from '../../card/model/card';
import {Group} from '../model/group';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../services/group.service';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../../shared/data.service';

@Component({
  selector: 'app-add-user-group',
  templateUrl: './add-user-group.component.html',
  styleUrls: ['./add-user-group.component.css']
})
export class AddUserGroupComponent implements OnInit {

  uploadForm: FormGroup;
  selectedFile: File;
  message: string;
  userEmail: string;
  emailGlobal: string;
  finalUrl: string;
  displayGroupUrl = 'https://digital-org.herokuapp.com/group/all/admin/';
  submitUrl = 'https://digital-org.herokuapp.com/group/add-user-from-group';

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
    console.log(this.userEmail);
    //this.finalUrl = this.submitUrl.concat('adminEmail='.concat(this.emailGlobal).concat('&groupId=').concat(String(this.group_id)));
    // tslint:disable-next-line:max-line-length
    const dataset = {
      adminEmail: this.emailGlobal,
      groupId: this.group_id,
      userEmail: this.userEmail};
    // tslint:disable-next-line:max-line-length
    this.httpClient.post(this.submitUrl, dataset).subscribe();
    alert('User added to group');
    this.gotoGroupList();

  }
  // tslint:disable-next-line:typedef
  gotoGroupList() {
    this.router.navigate(['/home/group/listCardsInGroup']);
  }

  ngOnInit(): void {
    this.displayGroups();
  }

}
