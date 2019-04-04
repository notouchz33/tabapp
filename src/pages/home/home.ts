import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // create properties
  fullname:String = "Teeruth Yangyuen";

  profileData = {
    'fullname':this.fullname,
    'email':'',
    'tel':''
  }

  constructor(public navCtrl: NavController) {

  }

  showprofile(){
    // Open profile page
    this.navCtrl.push(ProfilePage,{
      fullname:this.profileData.fullname,
      email:this.profileData.email,
      tel:this.profileData.tel
    });
  }

}
