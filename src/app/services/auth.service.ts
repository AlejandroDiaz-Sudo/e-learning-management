import { Injectable } from '@angular/core';
import{AngularFireAuth} from "angularfire2/auth" ;
import * as firebase from 'firebase/app';
import { UserInterface } from './user';
import { Router } from '@angular/router';

import  'rxjs/add/operator/map';

import { auth } from 'firebase/app';











@Injectable({
  providedIn: 'root'
})


export class AuthService {


  constructor(public afsAuth: AngularFireAuth,private router: Router,) { }

  

      registerUser(email:string,pass:string){
          return new Promise  ((resolve,reject) =>{

            this.afsAuth.auth.createUserWithEmailAndPassword(email,pass)
              .then(userData => resolve(userData),
                  err => reject (err));
            });
        }




              logout(){

                 return this.afsAuth.auth.signOut();
                  
                }



                           loginEmail(email:string,pass:string){

                              return new Promise  ((resolve,reject) =>{

                                this.afsAuth.auth.signInWithEmailAndPassword(email,pass)
                                .then(userData => resolve(userData),
                                err => reject (err));
                                });
                                          }



                         getAuth(){

                            return this.afsAuth.authState.map( auth => auth);

                                  }


                                  loginGoogle(){

                                    
                                    return this.afsAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
                                  }

                                  
                                  onlogoutredirect(): void {
                                    this.router.navigate(['home']);
                                  }


                                  















}
  

  
