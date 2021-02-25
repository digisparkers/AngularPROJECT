import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }


url:string=''; /*TO BE CHANGED TO ENV VAR */



postData(url,getData){

return this.http.post(url,getData)

}



}
