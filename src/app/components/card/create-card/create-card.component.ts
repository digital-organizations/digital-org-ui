import { Component, OnInit } from '@angular/core';
import {Card} from '../model/card';
import {CardServiceService} from '../services/card-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../shared/data.service';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent  {
  uploadForm: FormGroup;
  selectedFile: File;
  message: string;
  emailGlobal: string;
  matspinner: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardServiceService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private dataService: DataService,
  ) {
    this.emailGlobal = sessionStorage.getItem('emailGlobal');
    this.buildForm();
  }


  // tslint:disable-next-line:typedef
  buildForm(){
    this.uploadForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(250)]],
      original_url: ['', [Validators.required]],
      expire_date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      component: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      updated_by: ['', [ Validators.minLength(2), Validators.maxLength(30)]],
      team: ['', [ Validators.minLength(2), Validators.maxLength(30)]],
      tribe: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      created_by: [''],
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.matspinner = true;
    this.cardService.save(this.uploadForm.value).subscribe(result => this.gotoCardList());

  }
  // tslint:disable-next-line:typedef
  gotoCardList() {
    this.router.navigate(['/home/card']);
  }
}
