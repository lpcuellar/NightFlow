import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goSearch(category) {
    const search = category;
    console.log('sale? :(', search);
    if(search !== ''){
      this.router.navigate(['/results'], {queryParams: {"search": search}})
    }
  }
}
