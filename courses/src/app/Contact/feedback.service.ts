import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http:HttpClient) {

   }

   postFeedbackData(data:any){
    const headers = new HttpHeaders({myHeader:'Custom Header'})
   return this.http.post('https://courses-24550-default-rtdb.firebaseio.com/feedback.json',data,{headers:headers})
   }

   getFeedBackData(){
    return this.http.get('https://courses-24550-default-rtdb.firebaseio.com/feedback.json')
   }
}
