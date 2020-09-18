import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;
  emailGlobal:string;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Card catalog',
        link: './card',
        index: 0
      }, {
        label: 'Group catalog',
        link: './group',
        index: 1
      },
    ];
    this.emailGlobal = sessionStorage.getItem('emailGlobal');
  }

  home(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
