import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Add Card',
        link: './addCard',
        index: 0
      }, {
        label: 'List all cards',
        link: './listCards',
        index: 1
      }, {
        label: 'Suggestion list',
        link: './listSuggestion',
        index: 1
      }
    ];
  }

  ngOnInit(): void {
  }

}
