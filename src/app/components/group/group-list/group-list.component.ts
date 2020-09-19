import { Component, OnInit } from '@angular/core';
import {Card} from '../../card/model/card';
import {DataService} from '../../../shared/data.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {CardListDialogComponent} from '../../card/card-list-dialog/card-list-dialog.component';
import {ShareUrlComponent} from '../../card/share-url/share-url.component';
import {SuggestionBoxComponent} from '../../card/suggestion-box/suggestion-box.component';
import {GroupService} from '../services/group.service';
import {Group} from '../model/group';
import {GroupUpdateComponent} from '../group-update/group-update.component';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  emailGlobal: string;
  groups: Group[];

  private baseUrl = 'https://digital-org.herokuapp.com/card/';

  constructor(private groupService: GroupService,
              private dataService: DataService,
              private httpClient: HttpClient,
              public dialog: MatDialog,
              public router: Router,
  ) {
    this.emailGlobal = sessionStorage.getItem('emailGlobal');
  }


  // tslint:disable-next-line:typedef
  onEdit(id: number){
    this.openDialog(id);
  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    console.log(this.emailGlobal);
    this.groupService.getAllGroup().subscribe(data => {
      this.groups = data;
    });
  }
  // tslint:disable-next-line:typedef
  openDialog(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = id;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(GroupUpdateComponent, dialogConfig);
  }
}
