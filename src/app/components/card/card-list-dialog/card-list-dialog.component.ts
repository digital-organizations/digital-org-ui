import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {DataService} from '../../../shared/data.service';
import {HttpClient} from '@angular/common/http';
import {CardListUpdateComponent} from '../card-list-update/card-list-update.component';

@Component({
  selector: 'app-card-list-dialog',
  templateUrl: './card-list-dialog.component.html',
  styleUrls: ['./card-list-dialog.component.css']
})
export class CardListDialogComponent implements OnInit {
  id: number;
  email: string;
  selectedFile;
  message: string;
  private uploadUrl = 'https://digital-org.herokuapp.com/card/upload/';


  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CardListDialogComponent>,
    private dataService: DataService,
    private httpClient: HttpClient,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data) {
    console.log('data');
    console.log(data);
    this.id = data;
    this.email = dataService.getemailGlobal();

  }
  // tslint:disable-next-line:typedef
  save(){
    this.httpClient.post('', '');
  }

  // tslint:disable-next-line:typedef
  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }


  // tslint:disable-next-line:typedef
  onUpload(){
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
    this.httpClient.post(this.uploadUrl.concat(String(this.id)), uploadImageData, { observe: 'response' })
      .subscribe((response) =>
      {if (response.status === 200){
        alert('Image uploaded');
      }
      else{
        alert('Image upload not successful');
      }
      });
  }

  // tslint:disable-next-line:typedef
  openDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = this.id;
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.dialog.open(CardListUpdateComponent, dialogConfig);
  }


  // tslint:disable-next-line:typedef
  close() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
