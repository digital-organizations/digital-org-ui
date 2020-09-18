import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {EmailServiceService} from '../card/services/email-service.service';
import {Email} from '../card/model/email';
import {DataService} from '../../shared/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  emaillocal: string;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dataService: DataService,
              ) {

  }
  email = new FormControl('', [Validators.required, Validators.email]);

  // tslint:disable-next-line:typedef
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.dataService.setemailGlobal(this.emaillocal);
    sessionStorage.setItem('emailGlobal', this.emaillocal);
    this.gotoHomePage();
  }
  // tslint:disable-next-line:typedef
  gotoHomePage(){
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
  }

}
