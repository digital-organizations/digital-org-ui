import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../../../shared/data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-share-url',
  templateUrl: './share-url.component.html',
  styleUrls: ['./share-url.component.css']
})
export class ShareUrlComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  short_url: string;
  constructor(private dialogRef: MatDialogRef<ShareUrlComponent>,
              private dataService: DataService,
              private httpClient: HttpClient,
              public dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) data) {
    this.short_url = 'https://digital-org.herokuapp.com/url/' + data;
    console.log(this.short_url);

  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  close(){
    this.dialogRef.close();
  }

}
