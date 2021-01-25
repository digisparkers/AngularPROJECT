import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-create',
  templateUrl: './fashion-create.component.html',
  styleUrls: ['./fashion-create.component.css']
})
export class FashionCreateComponent implements OnInit {
  name: string;
  cover: File;
  description:any={};
  price:string;
 Discount:string;
 selectCat:string;
 chageporperty:string;
 buttonboool:boolean=true;
 Acessories:string;
  constructor() { }

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





    
      }

      onAcessoriesChanged(event){


this.Acessories=event.target.value;

      }


}
