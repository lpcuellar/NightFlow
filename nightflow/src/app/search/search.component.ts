import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../place.model';
import { SearchService } from '../auth/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTag: any;
  Places: Place[];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.searchTag = params['search'];
    })

    console.log(this.searchTag);

    
  }

}
