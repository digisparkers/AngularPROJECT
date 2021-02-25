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
import { FemaleHairComponent } from './female-hair/female-hair.component';
import { ToastrModule } from 'ngx-toastr';
import {PostService} from "./services/post.service"
import {SucesslogginggService} from "./services/sucessloggingg.service"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { CosmetictabelComponent } from './datatable/cosmetictabel/cosmetictabel.component';
import { AcessoriesComponent } from './datatable/acessories/acessories.component';
import { LoaderComponent } from './core/loader/loader.component';

const routes=[
  {path:'',component: LoginComponent},
 {path:'uploadbanner',component:UploadbannerComponent},

 {path:'AddCosmetic',component:CosmeticsCreateComponent},

 {path:'AddAccessories',component:FemaleAccessoriesComponent},

 {path:'AddFemaleItems',component: FemaleItemsComponent},
 {path:'AddFemaleHari',component: FemaleHairComponent},
 {path:'Cosmetictabel',component: CosmetictabelComponent},
 {path:'acessoriestabel',component:AcessoriesComponent },
 {path:'LoaderTesting',component:LoaderComponent },

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
    LoginComponent,
    CosmetictabelComponent,
    AcessoriesComponent,
    LoaderComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  providers: [PostService,SucesslogginggService],
  bootstrap: [AppComponent]
})
export class AppModule { }
