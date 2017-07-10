import { PostDetailPage } from './../../pages/post-detail/post-detail';
import { DataProvider } from './../../providers/data-provider';
import { NavController, ToastController, AlertController } from 'ionic-angular';
import { Post } from './../../models/post';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the PostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'post-component',
  templateUrl: 'post-component.html'
})
export class PostComponent {

  @Input('post') post: Post;

  constructor(private navCtrl: NavController, private dataProvider: DataProvider, private toastCtrl: ToastController,
              private alertCtrl: AlertController) {

  }

  ngOnInit() {
//    if (this.post.commentsCount == undefined || this.post.likesCount == undefined) {
      this.dataProvider.getLikesCount(this.post.id.toString()).then(likesCount => {
        this.post.likesCount = likesCount;
      });

      this.dataProvider.getCommentsCount(this.post.id.toString()).then(commentsCount => {
        this.post.commentsCount = commentsCount;
      });
//    }
  }  

  likePost() {        //TODO: Get userid from localStorage
    this.dataProvider.likePost("1", this.post.id.toString()).then((success: Boolean) => {
      if (success) {
        this.post.likesCount += 1;
        this.presentToast('Thanks for the like!');
      }
    });
  }

  composeComment() {
    let prompt = this.alertCtrl.create({
      title: 'New Comment',
      message: "Write your comment below",
      inputs: [
        {
          name: 'text'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Done',
          handler: data => {
            console.log('Saved clicked: ', data.text);        //TODO: Get userid from localStorage
            this.dataProvider.postComment("1", this.post.id.toString(), data.text).then((success: Boolean) => { 
              if (success) {
                this.presentToast('Comment Posted.');
                
                this.dataProvider.getCommentsCount(this.post.id.toString()).then(commentsCount => {
                  this.post.commentsCount = commentsCount;
                });
              } else {
                this.presentToast('Could not post Comment. Please retry.');
              }
            });
          }
        }
      ]
    });
    prompt.present();
  }

  showPostDetail(post: Post) {
    this.navCtrl.push(PostDetailPage, { post: post })
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
