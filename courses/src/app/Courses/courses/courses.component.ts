import { Component } from '@angular/core';
import { AuthService } from 'src/app/Guards/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(private authenticate:AuthService){

  }
  courses=[
    {id:1,name:"Angular Basics",type:"Free",image:"https://th.bing.com/th?id=OSK.639e3b0355a42430576f839817f2528e&w=148&h=148&c=7&o=6&pid=SANGAM",price:0,description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {id:2,name:"Angular Advance",type:"Premium",image:"https://th.bing.com/th?id=OSK.8c5f4abf4c3d4e95ddfa04af5a0acf04&w=80&h=80&c=7&rs=1&qlt=80&o=6&pid=SANGAM",price:4.1,description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {id:3,name:"JavaScript Basics",type:"Free",image:"https://th.bing.com/th?id=ODLS.22aa5289-0530-49da-9077-18d6ba743d25&w=16&h=16&o=6&pid=1.2",price:0,description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {id:4,name:"JavaScript Advance",type:"Premium",image:"https://th.bing.com/th?id=OSK.HEROGLit0G7C_sVAzGZYoabO-Xaih239ffzWh-HxYpS8coI&w=472&h=280&c=1&rs=2&o=6&pid=SANGAM",price:4.6,description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {id:5,name:"TypeScript Basics",type:"Free",image:"https://th.bing.com/th/id/OIP.eZQVIBhADnz4KWkWo5UAAAHaEK?w=266&h=180&c=7&r=0&o=5&pid=1.7",price:0,description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
    {id:6,name:"TypeScript Advance",type:"Premium",image:"https://th.bing.com/th/id/OIP._0hv8sVaPFCiUebHRpzyCQHaDX?w=343&h=159&c=7&r=0&o=5&pid=1.7",price:6.7,description:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."},
  ]

  showMessage(){
    return this.authenticate.authenticationMessage()
  }
}
