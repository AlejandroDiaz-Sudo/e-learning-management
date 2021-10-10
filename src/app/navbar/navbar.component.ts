import { Component, OnInit,ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import {MatSidenav} from '@angular/material/sidenav';
import { SidebarmoduleModule } from '../sidebarmodule/sidebarmodule.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  
  constructor(

    public AuthService:AuthService,
    
    private afsAuth: AngularFireAuth


  ) { }


  
  public app_name:string='Synapse'  /*Shows the app name*/
  public isLoggerd:boolean=true; /*if the user is logged , that shit shows the menu*/
  public isnotLoggerd:boolean=false;
  
  
  



  @ViewChild('sidenav')
  sidenav!: MatSidenav;

reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }



  ngOnInit(): void {

    this.getCurrentUser();

    
  }




  OnClickLogOut(){

    this.afsAuth.auth.signOut();

    this.AuthService.logout();

    this.AuthService.onlogoutredirect();
    
    console.log("LoggedOut");
    }
  



    getCurrentUser() {

      this.AuthService.getAuth().subscribe(auth => {
        if (auth) {
          console.log('user logged');
          this.isLoggerd = true;
          this.isnotLoggerd = false;
        } else {
          console.log('NOT user logged');
          this.isLoggerd = false;
          this.isnotLoggerd = true;
          
          
          

        }
      });
        }



       



       
       







    
  
  
  
  }
