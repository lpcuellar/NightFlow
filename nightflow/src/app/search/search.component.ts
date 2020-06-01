import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { places, filterPlaces } from '../../places';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchTag: any;
  places = places;
  result = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTag = params['search'];
    })

    this.searchTag = this.searchTag.toLowerCase();

    this.result = filterPlaces(places, this.searchTag, this.result);
  }

  goPlacePage = (place) => {
    this.router.navigate(['/place'], {queryParams: {"palce": place}});
  }; 

}
