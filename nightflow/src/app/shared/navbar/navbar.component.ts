import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {
  searchPlace = new FormControl('');
  
  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  async ngOnInit() {
  }
}
