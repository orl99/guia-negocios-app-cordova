import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  // tslint:disable-next-line: no-inferrable-types
  private darkMode: boolean = false;

  constructor( private storage: Storage ) {}

  async cargarStorage() {
    this.darkMode = await this.storage.get('darkMode') || false;
    return this.darkMode;
  }

  async guardarStorage( darkMode: boolean){
    this.darkMode = darkMode;
    await this.storage.set('darkMode', darkMode) ;
  }

}



