import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { auth } from 'firebase';







@Injectable({

  providedIn: 'root'


})

export class AuthGuard implements CanActivate {

  constructor(

    private router:Router,
    private afAuth:AngularFireAuth,
    private AuthService:AuthService


  ) {}


  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.AuthService.afsAuth.authState
    .take(1)
    .map(authState => !!authState)
    .do(authenticared =>{

      if(!authenticared){
        this.router.navigate(['/login']);
      }

    });
  }
  
}
