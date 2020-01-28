import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Router, Routes, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})

export class AppComponent {
    title = 'OpenHome';
    constructor(private route: ActivatedRoute, private router: Router, private titleService: Title) {
        let titulo;
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                titulo = this.route.root.firstChild.snapshot.data['title'];
                titulo = titulo ? titulo + ' - ' + this.title : this.title;
                // this.title = titulo;
                titleService.setTitle( titulo );
            }
        });
    }
}

