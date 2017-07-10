import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { Autosize } from 'ionic2-autosize';
import { ComposePage } from './../pages/compose-page/compose-page';
import { ProfilePage } from './../pages/profile-page/profile-page';
import { PostComponent } from './../components/post-component/post-component';
import { PostDetailPage } from './../pages/post-detail/post-detail';
import { MomentsAgoPipe } from './../pipes/moments-ago';
import { DataProvider } from './../providers/data-provider';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Transfer } from '@ionic-native/transfer';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PostDetailPage,
    Autosize,
    ComposePage,
    PostComponent,
    MomentsAgoPipe,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ComposePage,
    PostDetailPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DataProvider,
    ImagePicker,
    Transfer,
    Camera,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
