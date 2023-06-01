import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  countries:any=['India','America','Afghanistan','Armenia','Peru','Chile','Saudi','Japan','Africa']
  public selectedValue:any=this.countries[0]
  public idNum:number=1
  public idd:any
  public un:any=''
  public mn:any=''
  public eml:any=''
  public ps:any=''
  public gen:any=''

  public allData:any

  constructor(private api : FeedbackService){}

  onSubmit(data:any){
    console.log(data.value)
  }
}
