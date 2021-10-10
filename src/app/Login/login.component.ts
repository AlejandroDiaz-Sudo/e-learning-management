import { Component, OnInit } from '@angular/core';

import { auth } from 'firebase/app';
import { AuthService } from '../services/auth.service';


import { Router } from '@angular/router';


import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public email!: string;
  public pass!: string;
  
  
  
  
  constructor(

              public AuthService:AuthService,
              public router:Router,
              public flashMensaje:FlashMessagesService, 
              
              



  ) { }
  
  ngOnInit() {
  }

/*rEGISTER*/ 
  OnSubmitlogUser(){


      this.AuthService.loginEmail(this.email, this.pass )
        .then((res)=>{


            this.flashMensaje.show('Inicio de Sesión Correcto.',
      
            {cssClass:'alert-success',timeout:4000});


            console.log(res);
            this.router.navigate(['/privado']);

          }).catch((err)=>{

              this.flashMensaje.show(err.message,
              {cssClass:'alert-danger',timeout:10000});
              console.log(err);
      
          });


            }





      OnClickGoogleLogin(){


  
        this.AuthService.loginGoogle()
        .then((res)=>{

        this.flashMensaje.show('Inicio de Sesión con Google Correcto.',
      
        {cssClass:'alert-success',timeout:4000});

        this.router.navigate(['/privado']);

        }).catch((err)=>{

            this.flashMensaje.show(err.message,
            {cssClass:'alert-danger',timeout:10000});
            console.log(err);
                          });
  
  
  
  
  

  
  
}








OnClickLogOut(){

  

  this.AuthService.logout();
  


}


}
