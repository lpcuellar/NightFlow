import { Component, OnInit } from '@angular/core';


import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
  providers: [ AuthService ],
})
export class SendEmailComponent implements OnInit {
  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSendEmail(): void {
    this.authService.sendVerificationEmail();
    console.log("sending...")
  }
}
