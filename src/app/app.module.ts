import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import{MaterialModule} from "./material/material.module";
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PrivatezoneComponent } from './privatezone/privatezone.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

import { FormsModule} from '@angular/forms';


import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AuthService } from './services/auth.service';
import { environment } from 'src/environments/environment';

import { AuthGuard } from './guards/auth.guard';


import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GradosRegisterComponent } from './grados-register/grados-register.component';
import{AngularFirestore} from "@angular/fire/firestore";

import { Observable } from 'rxjs';



@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavbarComponent,
    HomeComponent,
    PrivatezoneComponent,
    NotFoundPageComponent,
    SidebarComponent,
    GradosRegisterComponent,
    

    


  ],



  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp (environment.firebaseConfig),
    FlashMessagesModule,
    
    
    
    
    
    
    
    

    
    
  ],
  providers: [AuthService,AuthGuard,FlashMessagesService,AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
  


