import { Component, Attribute } from '@angular/core';

@Component({
  selector: 'app-use-brand',
  template: `
  <div class="use-brand" [attr.data-type]="brand.size">
    <h1>{{ brand.title }}
        <span>{{ brand.stars }}</span>
        <span>{{ brand.caption }}</span>
    </h1>
  </div>
  `,
  styleUrls: ['./brand.component.scss']
})

export class BrandComponent {

  brand: any = {
    title: 'OpenHome',
    stars: '★★★★★',
    caption: 'Abrindo portas para você',
    size: 'normal'
  };

  constructor(@Attribute('size') public size: 'normal')  {
    this.brand.size = size ? size : 'normal';
  }

}
