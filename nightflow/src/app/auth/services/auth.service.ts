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

        this.user.updateProfile({
          displayName: username,
        })

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
