import { Component, OnInit } from '@angular/core';
import { CardServiceService} from '../services/card-service.service';
import { Card } from '../model/card';


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  cards: Card[];
  constructor(private cardService: CardServiceService) { }

  ngOnInit(){
    this.cardService.findAll().subscribe(data => {
      this.cards = data;
    });
  }
}
