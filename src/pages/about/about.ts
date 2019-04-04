import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public actionSheetCtrl: ActionSheetController,public alertCtrl: AlertController) {

  }

  showactionsheet(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Confirm to Delete',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            //console.log('Destructive clicked');
            alert("ลบรายการแล้ว");
          }
        },{
          text: 'Keep it',
          handler: () => {
            // console.log('Archive clicked');
            alert("ไม่ได้ลบรายการนี้");
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
            alert("ยกเลิก");
          }
        }
      ]
    });
    actionSheet.present();
  }

  showconfirm(){
    const confirm = this.alertCtrl.create({
      title: 'ยืนยัน?',
      message: 'คุณต้องการยืนยันใช่หรือไม่?',
      buttons: [
        {
          text: 'ยกเลิก',
          handler: () => {
            // console.log('Disagree clicked');
            alert("ยกเลิก");
          }
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            // console.log('Agree clicked');
            alert("ยืนยันแล้ว");
          }
        }
      ]
    });
    confirm.present();
  }

}
