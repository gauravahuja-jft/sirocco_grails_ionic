import { User } from './../../models/user';
import { Comment } from './../../models/comment';
import { Post } from './../../models/post';
import { DataProvider } from './../../providers/data-provider';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-post-detail',
  templateUrl: 'post-detail.html'
})
export class PostDetailPage {

  post: Post;
  comments : Comment[];

  private showSpinner: boolean;

  constructor(public navCtrl: NavController, private dataProvider: DataProvider, private navParams: NavParams) {
    this.post = this.navParams.get('post');
  }
  
  ngOnInit() {
    this.showSpinner = true;
    this.dataProvider.getComments(this.post.id.toString()).then(comments => {
      this.comments = comments;
      this.showSpinner = false;
    });
  }  

}
