import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-uploadbanner',
  templateUrl: './uploadbanner.component.html',
  styleUrls: ['./uploadbanner.component.css']
})
export class UploadbannerComponent implements OnInit {

  constructor(private http:HttpClient) { }

  name: string;
  cover: File;
  description:any={};
  price:string;
 Discount:string;
 selectCat:string;
 buttonboool:boolean=true;

  ngOnInit(): void {
  }
 


  onNameChanged(event:any){

this.name= event.target.value;
console.log(this.name)

  }

  onImageChanged(event){

    this.cover = event.target.files[0];
    console.log(this.cover)
  }



  onfeatureChanged(event){

console.log(event.target.value);

this.description.features=event.target.value
  }


  onDesChanged(event){

    this.description.des=event.target.value;

console.log(this.description)

  }


  onPriceChanged(event){

this.price=event.target.value;

  }
  onDiscountChanged(event){
this.Discount=event.target.value;

  }


  onSelectChange(event){

this.selectCat=event.target.value;

this.switchcase(this.selectCat)


  }

  uploadBanner(){
    const uploadData = new FormData();
    uploadData.append('name', this.name);
    
 
uploadData.append('banner_image',this.cover,this.cover.name);
    uploadData.append('description ', JSON.stringify(this.description));
    uploadData.append('price ', this.price);
    uploadData.append('offer ', this.Discount);


    // for (const entry of uploadData.entries())
    // {
    //     console.log(entry)
    // }

    this.http.post(`http://127.0.0.1:8000/${this.selectCat}/banner/create/`,uploadData).subscribe(ele => {

console.log(ele)

    })
  }

private switchcase(getInput){

switch (getInput){

  case "Please Select the option":

  this.buttonboool=true
  break

  case "cosmetics":
  this.buttonboool=false


  case "fashion":
    this.buttonboool=false
}

}

}
