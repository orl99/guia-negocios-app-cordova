import { Injectable, isDevMode } from '@angular/core';
// IMPORTAMOS PLATFORM PARA PODER ARRANCAR ADMOB CUANDO LA APLICACION ESTE LISTA.
import { Platform } from '@ionic/angular';
// IMPORTAMOS LO QUE VAMOS A UTILIZAR DE ADMOB.
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig, AdMobFreeRewardVideoConfig } from '@ionic-native/admob-free/ngx';


@Injectable({
    providedIn: 'root'
})
export class AdmobService {

  // CONFIGURACION DEL BANNER
  androidBannerConfig: AdMobFreeBannerConfig = {
    isTesting: (isDevMode()) ? true  : false,
    autoShow: true,
    id: 'ca-app-pub-8693507653531046/2409629315',
    size: 'SMART_BANNER'
  };
  // CONFIGURACION DEL BANNER
  iosdBannerConfig: AdMobFreeBannerConfig = {
    isTesting: (isDevMode()) ? true  : false,
    autoShow: true,
    id: 'ca-app-pub-8693507653531046/5972483697',
    size: 'SMART_BANNER'
  };

  // AÑADIR PLATFORM Y ADMOB EN NUESTRO CONSTRUCTOR.
  constructor(
    public platform: Platform,
    private admobFree: AdMobFree
  ) {
      // CARGAMOS LOS ANUNCIOS DURANTE EL INICIO DE LA APP CON LA PROMESA DE platform.ready
      platform.ready().then(() => {
        // BANNER
        this.setBannerConfig();
    });
  }


  private setBannerConfig() {

    // If Android
    if (this.platform.is('hybrid') && this.platform.is('android')) {
        this.admobFree.banner.config(this.androidBannerConfig);
    }
    // if ios
    if (this.platform.is('hybrid') && this.platform.is('ios')) {
        this.admobFree.banner.config(this.iosdBannerConfig);
    }
  }

  public showBanner() {
    // COMPROBAR Y MOSTRAR EL BANNER
    this.admobFree.banner.prepare().then(() => {
      console.log('BANNER CARGADO CORRECTAMENTE');
    }).catch(e =>
      console.log('PROBLEMA CARGANDO BANNER: ', e)
    );
  }
}
