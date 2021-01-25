import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-female-items',
  templateUrl: './female-items.component.html',
  styleUrls: ['./female-items.component.css']
})
export class FemaleItemsComponent implements OnInit {
  name: string;
  cover: File;
  description:any={};
  reviews:any={};
  price:string;
 Discount:string;
 selectCat:string;
 chageporperty:string;
 Metal:string;
 platted_metal:string;
 delivery_type:string;
 jewellery_type:string;
 color:string;

 stone:string;
 stone_shape:string;
 number_of_stones:string;
 material:string;
 no_of_pieces:string;
 discount:string;
 buttonboool:boolean=true;
 Acessories:string;
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
      onreviewsChanged(event){

        this.reviews=event.target.value;
        
        }
        
    
      onmodelreviewsChanged(event){
this.reviews.modelreview=event.target.value;
      }
    
      onpricereviewsChanged(event){

        this.reviews.pricereview=event.target.value;

      }


      onPriceChanged(event){
    
    this.price=event.target.value;
    
      }
      onWeightChanged(event){
    this.Discount=event.target.value;
    
      }
    
    
      onSelectChange(event){
  this.selectCat=event.target.value;
  console.log(this.selectCat);
this.buttonboool=false


    }
onMetalChanged(event){

this.Metal=event.target.value;

}

onplattedmetalChanged(event){

  this.platted_metal=event.target.value;
}

ondeliveryTypeChanged(event){
this.delivery_type=event.target.value;
}

onjewelleryTypeChanged(event){

this.jewellery_type=event.target.value;
}

oncolorChanged(event){
this.color=event.target.value;
}



onstoneChanged(event){

this.stone=event.target.value;
}


onstoneShapeChanged(event){
this.stone_shape=event.target.value;

}

onnumberStonesChanged(event){
this.number_of_stones=event.target.value;

}

onmaterialChanged(event){
this.material=event.target.value;
}

onPiecesChanged(event){
this.no_of_pieces=event.target.value;
}

ondiscountChanged(event){
this.discount=event.target.value;
}

      onAcessoriesChanged(event){


this.Acessories=event.target.value;

      }

      uploadFemaleAcess(){

        console.log("hi")
        const uploadData = new FormData();
     
        uploadData.append('name', this.name);
        uploadData.append(`${this.selectCat}_image`,this.cover,this.cover.name);
        uploadData.append('description ', JSON.stringify(this.description));
        uploadData.append('reviews', JSON.stringify(this.reviews));

        uploadData.append('price', this.price);
        
        uploadData.append('discount', this.Discount);
        uploadData.append('category',this.selectCat);
            
        uploadData.append('metal', this.Metal);

            
        uploadData.append('platted_metal', this.platted_metal);
        uploadData.append('delivery_type', this.delivery_type);
        uploadData.append('jewellery_type', this.jewellery_type);
        uploadData.append('color', this.color);
       
        uploadData.append('stone', this.stone);
        uploadData.append('stone_shape', this.stone_shape);
        uploadData.append('number_of_stones', this.number_of_stones);
        uploadData.append('no_of_pieces', this.no_of_pieces);
        uploadData.append('discount', this.discount);

//  console.log(uploadFemaleAcessform.value);
//  console.log(this.chageporperty)
//  uploadFemaleAcessform.value[this. chageporperty]= uploadData;
//const get=this.selectCat==='nose_pins'?'nose/pins':this.selectCat==='masonry_key'?'masonry/key':this.selectCat==='waist_belt'?'waist/belt':this.selectCat;
let url=`http://127.0.0.1:8000/fashion/${this.selectCat==='nose_pins'?'nose/pins':this.selectCat==='masonry_key'?'masonry/key':this.selectCat==='waist_belt'?'waist/belt':this.selectCat}/create/`
console.log(url);


 this.http.post(url,uploadData).subscribe(elel => {

   console.log(elel);
  
        })
      }





// private SwitchFemaleItems(getInput){

//  if(getInput==='nose_pins'){

// this.chageporperty='nose/pins'


//  }

// else if(getInput==='masonry_key'){

//   this.chageporperty='masonry/key'

// }



// }







}
