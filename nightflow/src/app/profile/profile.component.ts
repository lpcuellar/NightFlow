import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [AuthService],
})
export class ProfileComponent implements OnInit {

  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    const user = this.authService.getCurrentUser();

  }

  logout() {
    this.authService.logout();
  }

}
