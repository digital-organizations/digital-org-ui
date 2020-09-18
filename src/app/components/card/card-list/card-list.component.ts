import { Component, OnInit } from '@angular/core';
import { CardServiceService} from '../services/card-service.service';
import { Card } from '../model/card';
import {DataService} from '../../../shared/data.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CardListDialogComponent} from '../card-list-dialog/card-list-dialog.component';
import {ShareUrlComponent} from '../share-url/share-url.component';
import {SuggestionBoxComponent} from '../suggestion-box/suggestion-box.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  emailGlobal: string;
  cards: Card[];
  message: string;
  private selectedFile;
  private deleteUrl;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  private baseUrl = 'https://digital-org.herokuapp.com//card/';

  constructor(private cardService: CardServiceService,
              private dataService: DataService,
              private httpClient: HttpClient,
              public dialog: MatDialog,
              public router: Router,
  ) {
   this.emailGlobal = sessionStorage.getItem('emailGlobal');
  }

  getCardList(){
    this.cardService.findAll(this.emailGlobal).subscribe(data => {
      this.cards = data;
    });
  }

  // tslint:disable-next-line:typedef
  onEdit(id: number){
    this.openDialog(id);
  }
  redirect(){
    this.router.navigate(['/home/card/listCards']);
  }

  // tslint:disable-next-line:typedef
  onDelete(id: number){
  this.deleteUrl  = this.baseUrl.concat(String(id)).concat('/').concat(this.emailGlobal);
  if (confirm('Are you sure to delete' + id)) {
      console.log('Implement delete functionality here');
    }
    this.httpClient.delete(this.deleteUrl).subscribe(res => this.redirect());
    this.getCardList();

  }

  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.getCardList();
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
