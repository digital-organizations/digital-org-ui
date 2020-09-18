import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../../shared/data.service';
import {CardServiceService} from '../services/card-service.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-card-list-update',
  templateUrl: './card-list-update.component.html',
  styleUrls: ['./card-list-update.component.css']
})
export class CardListUpdateComponent implements OnInit {

  uploadForm: FormGroup;
  id: number;
  emailGlobal:  string;
  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CardListUpdateComponent>,
    private dataService: DataService,
    private cardService: CardServiceService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data;
    this.emailGlobal= sessionStorage.getItem('emailGlobal');
    this.buildForm();
  }


  // tslint:disable-next-line:typedef
  buildForm(){
    this.uploadForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      original_url: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      expire_date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      component: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      updated_by: ['', [ Validators.minLength(2), Validators.maxLength(30)]],
      team: ['', [ Validators.minLength(2), Validators.maxLength(30)]],
      tribe: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      id: [''],
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.cardService.update(this.uploadForm.value).subscribe(res => {
      alert('Card details updated');
      this.dialogRef.close();
    });
  }

  // tslint:disable-next-line:typedef
  close(){
    this.dialogRef.close();
}
  ngOnInit(): void {
  }

}
