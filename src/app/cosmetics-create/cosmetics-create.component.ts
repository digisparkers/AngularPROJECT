import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-cosmetics-create',
  templateUrl: './cosmetics-create.component.html',
  styleUrls: ['./cosmetics-create.component.css']
})
export class CosmeticsCreateComponent implements OnInit {
  name: string;
  cover: File;
  description:any={};
  price:string;
 Discount:string;
 selectCat:string;
 chageporperty:string;
 buttonboool:boolean=true;
  constructor(private http:HttpClient) { }

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
    
   
    
    this.description.features=event.target.value
      }
    
    
      onDesChanged(event){
    
        this.description.des=event.target.value;
    
 
    
      }
    
    
      onPriceChanged(event){
    
    this.price=event.target.value;
    
      }
      onDiscountChanged(event){
    this.Discount=event.target.value;
    
      }
    
    
      onSelectChange(event){
    this.selectCat=event.target.value;
    console.log(this.selectCat);

this.buttonboool=false

this.chooseswitch(this.selectCat);



    
      }
    
      uploadBanner(){
        const uploadData = new FormData();
        uploadData.append('name', this.name);
        console.log(this.description)
        
        console.log(this.chageporperty);
     
    uploadData.append(`${this.chageporperty}_cosmetics_image`,this.cover,this.cover.name);
        uploadData.append('description ', JSON.stringify(this.description));
        uploadData.append('price', this.price);
        uploadData.append('weight', this.Discount);
        uploadData.append('category',this.selectCat);
    
    
        this.http.post(`http://127.0.0.1:8000/cosmetics/${this.selectCat}/create/`,uploadData).subscribe(elel => {

console.log(elel);

        })
    
      }
    


private chooseswitch(getinput){


  switch(getinput){

case 'Please Select the option':
    this.buttonboool=true;

 
case 'eye':
    
this.chageporperty='face'

break

case 'face':

this.chageporperty='face'
break

case 'foot/and/nail':
  this.chageporperty='foot_and_nail'
  break
case 'lip':
  this.chageporperty='lips'

  }


}





}
