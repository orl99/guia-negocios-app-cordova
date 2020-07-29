import { Component, OnInit } from '@angular/core';

import { WordpressApiService } from 'src/app/services/wordpress-api.service';
import { Categories } from 'src/app/models/categories.interface';
import { Router } from '@angular/router';
// ionic
import { Platform } from '@ionic/angular';

// Envs
import { environment } from 'src/environments/environment';
import { AdmobService } from 'src/app/services/admob.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: Categories[];

  constructor(
      private wpService: WordpressApiService,
      private router: Router,
      private plt: Platform,
      private adModService: AdmobService) {}

  async ngOnInit() {
    // Show adds
    const res = await this.wpService.getCategories();
    console.log('res', res);
    this.categories = res;
    console.log('GPN-LOG: showbanner()');
    this.adModService.showBanner();
  }

  public goPostsByCat(catId: number) {
    this.router.navigate(['categories/posts/', catId]);
  }
}
