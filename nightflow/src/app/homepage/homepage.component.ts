import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title: 'Home';
  subtitle: 'Welcome to NightFlow';
  content: 'search something';
  image: 'assets/images/guate.jpeg';


  constructor() { }

  ngOnInit(): void {
  }

}
