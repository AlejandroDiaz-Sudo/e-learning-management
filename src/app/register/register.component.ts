import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import{Router} from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email!: string;
  public pass!: string;

  
  constructor(
              
              public AuthService:AuthService,
              public router:Router,
              public flashMensaje:FlashMessagesService,

    
    
    
    
    ) { }


  
  ngOnInit(): void {

  }


  OnSubmitAddUser(){

    this.AuthService.registerUser(this.email, this.pass )
    .then((res)=>{


        this.flashMensaje.show('Usuario Registrado.',
        
        {cssClass:'alert-success',timeout:4000});

        console.log("OK READY");
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



}
