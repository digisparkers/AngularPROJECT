import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import {Router,RouterModule} from "@angular/router"
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './home/home.component';
import { UploadbannerComponent } from './uploadbanner/uploadbanner.component';
import { FileDirective } from './directives/file.directive';
import { CosmeticsCreateComponent } from './cosmetics-create/cosmetics-create.component';
import { FashionCreateComponent } from './fashion-create/fashion-create.component';
import { FemaleAccessoriesComponent } from './female-accessories/female-accessories.component';
import {FemaleItemsComponent} from './female-items/female-items.component';
import { FemaleHairComponent } from './female-hair/female-hair.component'

const routes=[

 {path:'',component:UploadbannerComponent},

 {path:'AddCosmetic',component:CosmeticsCreateComponent},

 {path:'AddAccessories',component:FemaleAccessoriesComponent},

 {path:'AddFemaleItems',component: FemaleItemsComponent},
 {path:'AddFemaleHari',component: FemaleHairComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UploadbannerComponent,
    FileDirective,
    CosmeticsCreateComponent,
    FashionCreateComponent,
    FemaleAccessoriesComponent,
    FemaleItemsComponent,
    FemaleHairComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
