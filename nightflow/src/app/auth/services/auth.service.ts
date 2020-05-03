import { Injectable } from '@angular/core';
import { auth } from 'firebase/app'
import { AngularFireAuth } from '@angular/fire/auth'
import { User } from 'firebase';
import { first } from 'rxjs/operators';


@Injectable()

export class AuthService {
  public user: User;

  constructor(
    public afAuth: AngularFireAuth
  ) { }
  
  async resetPassword(email:string): Promise<any> {
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    } catch(error) {
      console.log(error)
    }
  }

  async sendVerificationEmail(): Promise<void> {
    return (await this.afAuth.currentUser).sendEmailVerification();
  } 

  async login(email:string, password:string) {
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(
        email, 
        password
      );
      
      if(result) {
        return result;
      } else {
        console.log(false);
        return false;
      }
    } catch(error){
      console.log(error);
    }
  }
    
  async register(
    firstName: string,
    lastName: string,
    email: string, 
    username: string,
    password:string) {
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      this.sendVerificationEmail();

    } catch(error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      
    } catch (error) {
      console.log(error);
    }
  }

  getCurrentUser() {
    try{
      return this.afAuth.authState.pipe(first()).toPromise();
    } catch(error) {
      console.log(error);
    }
  }
}
