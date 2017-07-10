import { DataProvider } from './../../providers/data-provider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ActionSheetController } from 'ionic-angular';
import { Autosize } from 'ionic2-autosize';
import { Transfer, FileUploadOptions, TransferObject } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

/**
 * Generated class for the ComposePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-compose',
  templateUrl: 'compose-page.html'
})
export class ComposePage {
  contentText: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataProvider: DataProvider, private toastCtrl: ToastController,
    private actionSheet: ActionSheetController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComposePage');
  }

  createPost() {
    this.dataProvider.createPost("1", this.contentText).then((success: Boolean) => {
      if (success) {
        this.presentToast("Post Created.");
        this.navCtrl.pop(); 
      } else {
        this.presentToast("Unable to create Post.");
      }
    });
  }  

  addImage() {
    let actionSheet = this.actionSheet.create({
      title: 'Choose Picture Source',
      buttons: [
        {
          text: 'Gallery',
          icon: 'albums',
          handler: () => {
            this.dataProvider.imageUploadHandler(1).then();
          }
        },
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.dataProvider.imageUploadHandler(2);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  presentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
