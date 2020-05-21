import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  hola = " hey";

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goSearch(category) {
    const search = category;
    if(search !== ''){
      this.router.navigate(['/results'], {queryParams: {"search": search}})
    }
  }

}
