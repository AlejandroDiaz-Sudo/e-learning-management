import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../services/user';
import { AuthService } from '../services/auth.service';






@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: UserInterface = {
    name!: '',
    email!: '',
    photoUrl!: '',
    roles: {}
  };

  public providerId: string = 'null';
  ngOnInit() {
    this.authService.getAuth().subscribe(user => {
      if (user) {
        
        this.user.name! = user.displayName!;
        this.user.photoUrl! = user.photoURL!;
        this.user.email! = user.email!;
        

        console.log(user.uid);
        console.log(user.isAnonymous);
        console.log(user.phoneNumber);
        console.log(user.tenantId);
        console.log(user.providerData);
        console.log(user.providerId);
        
      }
    })
  }

}
