import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Storage
import { IonicStorageModule } from '@ionic/storage';

// Interceptor
import { HttpLoaderInterceptor } from 'src/app/services/interceptors/httpLoaderInterceptor.interceptor';

// Modules
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HTTP } from '@ionic-native/http/ngx';

import { Facebook } from '@ionic-native/facebook/ngx';

import { AdMobFree } from '@ionic-native/admob-free/ngx';

// AdMob Service
import { AdmobService } from './services/admob.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicStorageModule.forRoot()

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoaderInterceptor,
      multi: true
    },
    HTTP,
    AppVersion,
    Facebook,
    AdMobFree,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
