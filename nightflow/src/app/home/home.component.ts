import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  searchPlace = new FormControl('');

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
