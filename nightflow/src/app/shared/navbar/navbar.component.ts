import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService],
})
export class NavbarComponent implements OnInit {

  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(
    private authService: AuthService
  ) { }

  async ngOnInit() {
  }

}
