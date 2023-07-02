import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent { 
  constructor(private router : Router,private activatedRoute:ActivatedRoute){

  }
  users=[
    {name:"John", job:"CEO,Infotech",contact:"john@gmail.com",country:"United States",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",avatar:"https://th.bing.com/th/id/OIP.Q2eZFhqhTBqhxQm3_lrTxwHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7"},
    {name:"Mark", job:"Founder",contact:"mark@gmail.com",country:"Germany",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",avatar:"https://th.bing.com/th/id/OIP.0puk1u0YlHp0vQwKCYMISQHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7"},
    {name:"Merry", job:"Mentor",contact:"merry@gmail.com",country:"Ireland",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",avatar:"https://th.bing.com/th/id/OIP.vf6tqF3ZfAAvJsEqI5-ubgHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7"},
    {name:"Steve", job:"Mentor",contact:"steve@gmail.com",country:"India",description:"Some quick example text to build on the card title and make up the bulk of the card's content.",avatar:"https://th.bing.com/th/id/OIP.HPRStoSGKM5YueqQkRyIrgHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7"}
  ]

  navigateToHome(){
    // this.router.navigate(['Home'],{relativeTo:this.activatedRoute})
    this.router.navigateByUrl('Home')
  }

}
