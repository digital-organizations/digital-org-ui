import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  navLinks: any[];
  activeLinkIndex = -1;
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Add Group',
        link: './addGroup',
        index: 0
      }, {
        label: 'Add card to group',
        link: './addCardToGroup',
        index: 1
      },
      {
        label: 'List group',
        link: './listGroup',
        index: 2
      },
      {
        label: 'List cards in Group',
        link: './listCardsInGroup',
        index: 3
      },
      {
        label: 'Delete cards from Group',
        link: './deleteCardsFromGroup',
        index: 3
      },
      {
        label: 'Add users to Group',
        link: './addUserToGroup',
        index: 5
      },
      {
        label: 'Remove users from Group',
        link: './deleteUserFromGroup',
        index: 6
      },
    ];
  }

  ngOnInit(): void {
  }

}
