import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-imoveis-list',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss']
})
export class ImoveisListComponent implements OnInit {

    @Input('data') data: any;
    @ViewChild('gmap') gmapElement: any;
    map: google.maps.Map;

    constructor() {}

    ngOnInit() {
        let data, marker, maps;
        data = this.data;

        if (data && data.map) {
            maps = new google.maps.Map( this.gmapElement.nativeElement, {
                zoom: 15,
                center: data.map
            });

            marker = new google.maps.Marker({
                position: data.map,
                map: maps
            });
        }
    }

}
