import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [], 


  imports: [
    CommonModule,
    MaterialModule,
  ],

 


})
export class SidebarmoduleModule { 



}

/**Verificar estas Imports */

import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarComponent } from '../sidebar/sidebar.component';

/**Verificar estas Imports */