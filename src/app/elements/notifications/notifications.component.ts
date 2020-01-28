import { Component, Attribute, Input, Output } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  badge = false;
  constructor(@Attribute('count') private count, @Attribute('max') private max ) {

    // Configura o número de Badges através dos atributos
    count = count ? Number(count) : 0; max = max ? max : 99;
    this.badge = Boolean(count) ? true : false;
    if ( count && count >= max ) { count = max + '+'; }
    this.count = count;
  }

}
