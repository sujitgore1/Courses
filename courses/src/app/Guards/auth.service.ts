import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn:boolean=false

  login(){
    this.loggedIn = true
    alert('Welcome please select courses of your choice if you want to logout just click on the same')
  }

  logout(){
    this.loggedIn = false
  }

  authenticateUser(){
    return this.loggedIn
  }

  authenticationMessage(){
    if(this.authenticateUser() == !true){
      alert('You have to login for access of courses')
      // this.router.navigate([''])
    }
  }
}
