import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-female-hair',
  templateUrl: './female-hair.component.html',
  styleUrls: ['./female-hair.component.css']
})
export class FemaleHairComponent implements OnInit {

  addhaircat:boolean=false;
  name: string;
  reviews:any={};
  modelreview:string;
  pricereview:string;
  cover: File;
  description:any={};
  price:string;
 Discount:string;
 endpoint:string;
 imagefield:string;

 Hair:string
 selectCat:string;
 weight:string;
 delivery:string;
  constructor(private http:HttpClient,private toast:ToastrService) { }

  ngOnInit(): void {
  }


  checkboxcat(){

this.addhaircat=true;


  }

  checkboxhari(){

    this.addhaircat=false;
  }


  onChangeName(event){

this. name=event.target.value;

  }

  onUploadImage(event){

    this.cover = event.target.files[0];
    console.log(this.cover)
  }

  onfeatureschange(event){

    this.description.features=event.target.value


  }

  ondescriptionchange(event){


    this.description.des=event.target.value;
  }



  onHairChange(event){

this.Hair=event.target.value;
console.log(this.Hair)


  }


  onPriceChange(event){

    this.price=event.target.value;

  }

  onWeightChange(event){

this. weight=event.target.value;

  }


  onCatChange(event){

    this.selectCat=event.target.value;
    this.switchme(this.selectCat)

  }



  ondelvieryChange(event){

this.delivery=event.target.value;


  }

  onmodelreviewsChanged(event){

this.reviews.modelreview=event.target.value;

  }



  onpricereviewsChanged(event){


    this.reviews.pricereview=event.target.value;
  }



  uploadfemalehair(){
   
    const uploadData = new FormData();

    uploadData.append('name', this.name);

    uploadData.append(`${this.imagefield}_image`,this.cover,this.cover.name);
    uploadData.append('description ', JSON.stringify(this.description));
    uploadData.append('price ', this.price);
    uploadData.append('weight ', this.weight);
    uploadData.append('category', this.selectCat);
    uploadData.append('delivery_type', this.delivery);
   

    uploadData.append('reviews', JSON.stringify(this.reviews));


  uploadData.append('hair', this.Hair);




this.http.post(`http://ec2-15-206-189-63.ap-south-1.compute.amazonaws.com/${this.endpoint}/create/`,uploadData).subscribe(ele => {

console.log(ele);


})



  }


private switchme(getInput){

 
  switch(getInput){


 
    case "Hair":

    this.imagefield='hair';
    this.endpoint='hair'
    break

    case "HairExtensions":

  this.imagefield='hair_extensions';
    this.endpoint='hair/extensions/subcategory'
    break

    case "HairGajra":

      this.imagefield='hair_gajra';
        this.endpoint='hair/gajra/subcategory'
        break
    
        case "HairBand":

          this.imagefield='hair_head_band';
            this.endpoint='hair/head/band/subcategory'
            break

            case "HairTies":

              this.imagefield='hair_ties';
                this.endpoint='hair/head/ties/subcategory'
                break
    
                
            case "HairVenis":

              this.imagefield='hair_venis';
                this.endpoint='hair/head/venis/subcategory'
                break
    

                case "HairWig":

                  this.imagefield='hair_wig';
                    this.endpoint='hair/head/wig/subcategory'
                    break

                    case "HairBridBillas":

                      this.imagefield='hair_braid_billas';
                        this.endpoint='hair/head/braid/billas/subcategory'
                        break
        
                        case "HairBun":

                          this.imagefield='hair_bun';
                            this.endpoint='hair/head/bun/subcategory'
                            break
            
                            case "HairClip":

                              this.imagefield='hair_pin_and_clips';
                                this.endpoint='hair/head/clip/and/pins/subcategory'
                                break


                                case "HairComb":

                                  this.imagefield='hair_comb';
                                    this.endpoint='hair/head/comb/subcategory'
                                    break
                


  }


}

}
