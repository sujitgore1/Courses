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
  public un:any
  public eml:any
  public text:any

  public feedback:any
  constructor(private api : FeedbackService){}

  onSubmit(data:any){
    // console.log(data.value)
    this.feedback = data.value

    if(this.feedback.id == undefined){
      this.feedback.id = this.idNum
    }
    this.idNum++
    console.log(this.feedback)
    this.api.postFeedbackData(data.value).subscribe((res)=>{
      console.log(res)
    })
  }

  getApiData(){
    this.api.getFeedBackData().subscribe((res)=>{
      console.log(res)
    })
  }

  onExit(){
    if(this.un || this.eml || this.text){
      return confirm("Your data has not been save Do you want to discard")
    }else{
      return true
    }
  }
}
