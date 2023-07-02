import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './Guards/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courses';

  constructor(private activatedRoute:ActivatedRoute, private authenticate:AuthService, private router:Router){

  }

  ngOnInit(){
    this.activatedRoute.fragment.subscribe((fragment)=>{
      this.jumpTo(fragment)
    })
  }
  jumpTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior:'smooth'})
  }

  userLogin(){
    this.authenticate.login()
  }

  userLogout(){
    this.authenticate.logout
  }

  authenticationMessage(){
  //  return this.authenticate.authenticationMessage()
  }
}
