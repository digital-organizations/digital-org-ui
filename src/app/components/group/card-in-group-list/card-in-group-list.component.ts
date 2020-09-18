import { Component, OnInit } from '@angular/core';
import {Card} from '../../card/model/card';
import {Group} from '../model/group';
import {GroupService} from '../services/group.service';
import {DataService} from '../../../shared/data.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {CardListDialogComponent} from '../../card/card-list-dialog/card-list-dialog.component';
import {ShareUrlComponent} from '../../card/share-url/share-url.component';
import {SuggestionBoxComponent} from '../../card/suggestion-box/suggestion-box.component';

@Component({
  selector: 'app-card-in-group-list',
  templateUrl: './card-in-group-list.component.html',
  styleUrls: ['./card-in-group-list.component.css']
})
export class CardInGroupListComponent implements OnInit {

  emailGlobal: string;
  message: string;
  private selectedFile;
  private deleteUrl;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  cards: Card[];
  groups: Group[];
  group_id:number;
  private baseUrl = 'https://digital-org.herokuapp.com//card/';
  displayGroupUrl='https://digital-org.herokuapp.com//group/all/admin/';
  groupUrl='http://localhost:4200/home/group/listCardsInGroup';

  constructor(private groupService: GroupService,
              private dataService: DataService,
              private httpClient: HttpClient,
              public dialog: MatDialog,
              public router: Router,
  ) {
    this.emailGlobal = sessionStorage.getItem('emailGlobal');
  }

  displayCardsInGroup(group_id: number){
    return this.groupService.getCards(this.group_id).subscribe(res => {
      this.cards = res;
    });
  }
  displayGroups(){
    this.httpClient.get<Group[]>(this.displayGroupUrl + this.emailGlobal).subscribe(res=>{
      this.groups = res;
    })

  }

  onSelect(id:number){
    this.group_id = id;
    this.displayCardsInGroup(id);
  }


  goToGroupHome(){
    this.router.navigate(['/home/group'])
  }


  // tslint:disable-next-line:typedef
  onEdit(id: number){
    this.openDialog(id);
  }

  // tslint:disable-next-line:typedef
  onDelete(id: number){
    this.deleteUrl  = this.baseUrl.concat(String(id)).concat('/').concat(this.emailGlobal);
    if (confirm('Are you sure to delete' + id)) {
      console.log('Implement delete functionality here');
      this.router.navigate(['/home/group']);
    }
    this.httpClient.delete(this.deleteUrl).subscribe();
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.displayGroups();
  }
  // tslint:disable-next-line:typedef
  openDialog(id: number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = id;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(CardListDialogComponent, dialogConfig);
  }

  // tslint:disable-next-line:typedef variable-name
  openDialogShare(short_url: string){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = short_url;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(ShareUrlComponent, dialogConfig);
  }

  // tslint:disable-next-line:typedef
  openDialogSuggest(id: number){

    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = id;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(SuggestionBoxComponent, dialogConfig);
  }

  // tslint:disable-next-line:typedef
  getImage(id: number) {
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('https://digital-org.herokuapp.com//card/download-octa/' + id)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

}
