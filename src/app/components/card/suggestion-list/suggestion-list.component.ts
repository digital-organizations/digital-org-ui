import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CardServiceService} from '../services/card-service.service';
import {DataService} from '../../../shared/data.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Suggestion} from '../suggestion';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css']
})
export class SuggestionListComponent implements OnInit  {

  getSuggestionUrl = 'https://digital-org.herokuapp.com//card/suggestion/';
  deleteSuggestionUrl = 'https://digital-org.herokuapp.com//card/suggestion/'
  emailGlobal: string;
  suggestions:Suggestion[];
  displayedColumns: any[] = ['card_id', 'email', 'suggested_date', 'suggestion_text','delete_suggestion'];
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private cardService: CardServiceService,
              private dataService: DataService,
              private httpClient: HttpClient,
              public dialog: MatDialog,
              public router: Router,
  ) {
    this.emailGlobal = sessionStorage.getItem('emailGlobal');
  }

  getSuggestionList(){
    this.httpClient.get<Suggestion[]>(this.getSuggestionUrl.concat(this.emailGlobal)).subscribe(res => {
      this.suggestions = res;
      console.log(this.suggestions);
    });
  }

  ngOnInit(){
    this.getSuggestionList();
  }
  delete(id:number){
    if (confirm('Are you sure to delete' + id)) {
      console.log('Implement delete functionality here');
      this.httpClient.delete(this.deleteSuggestionUrl.concat(String(id))).subscribe(res =>{
      });
    }
    this.getSuggestionList();
  }



}
