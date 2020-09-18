import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {GroupService} from '../services/group.service';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../../shared/data.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {CardServiceService} from '../../card/services/card-service.service';

@Component({
  selector: 'app-group-update',
  templateUrl: './group-update.component.html',
  styleUrls: ['./group-update.component.css']
})
export class GroupUpdateComponent implements OnInit {

  uploadForm: FormGroup;
  selectedFile: File;
  message: string;
  emailGlobal: string;
  id:number;

  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<GroupUpdateComponent>,
    private dataService: DataService,
    private groupService: GroupService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data;
    this.emailGlobal = sessionStorage.getItem('emailGlobal');
    this.buildForm();
  }


  // tslint:disable-next-line:typedef
  buildForm(){
    this.uploadForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      component: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      team: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      tribe: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      updated_by: [''],
      id:[''],
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.groupService.update(this.uploadForm.value).subscribe(result =>{});

  }

  close(){
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
