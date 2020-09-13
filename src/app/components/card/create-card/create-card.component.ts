import { Component, OnInit } from '@angular/core';
import {Card} from '../model/card';
import {CardServiceService} from '../services/card-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent  {
  uploadForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardService: CardServiceService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }


  // tslint:disable-next-line:typedef
  buildForm(){
  this.uploadForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    description: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    original_url: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    expire_date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    created_date: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    updated_by: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    suggested_by: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    team: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    tribe: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    picture: [''],
  });
}
  // tslint:disable-next-line:typedef
  onFileSelect(event) {
    const file = event.target.files[0];
    console.log(file);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    console.log(this.uploadForm.value);
    this.cardService.save(this.uploadForm.value).subscribe(result => this.gotoCardList());
  }

  // tslint:disable-next-line:typedef
  gotoCardList() {
    this.router.navigate(['/cards']);
  }
}
