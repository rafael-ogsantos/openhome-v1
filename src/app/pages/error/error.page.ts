import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';


@Component({
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss']
})

export class ErrorCustomComponent {

  // Captura a URL atual através do Router
  url_atual: string;
  constructor(private route: ActivatedRoute, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if ( this.router.url ) {
          this.url_atual = this.router.url;
        }
      }
    });
  }

}
