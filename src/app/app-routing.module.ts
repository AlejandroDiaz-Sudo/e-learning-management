import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent} from './register/register.component';
import { PrivatezoneComponent } from './privatezone/privatezone.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthGuard } from './guards/auth.guard';



const routes: Routes = [

{path:'',component:HomeComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'privado',component:PrivatezoneComponent,canActivate:[AuthGuard]},
{path:'register',component:RegisterComponent},
{path:'**',component:NotFoundPageComponent},



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
