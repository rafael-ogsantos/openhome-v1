import { Component, Attribute, Input } from '@angular/core';

@Component({
    selector: 'app-get-title',
    templateUrl: './title.component.html',
    styleUrls: [ './title.component.scss']
})

export class TitleElComponent {

    @Input() filter: any;
    @Input() buscar: any;

    constructor(@Attribute('title') public titulo: string) {

        if (this.filter) {
            this.filter = this.getFiltros(this.filter);
        }

        if (this.buscar) {
            this.buscar.title = this.buscar.title ? this.buscar.title : 'Pesquisar';
            this.buscar.value = this.buscar.value ? this.buscar.value : '';
        }
    }

    private getFiltros(filtro) {
        filtro.type = 'select';
        filtro.appearance = 'fill';
        if (!filtro.selected && filtro.options[0]) {
            filtro.selected = filtro.options[0].value;
        }
        return filtro;
    }

    Searching(e) {
        if ( e.target.value.length > 3 ) {
            this.buscar.value = e.target.value;
        } else { this.buscar.value = ''; }
    }
}
