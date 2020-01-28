import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.scss']
})

export class PaginacaoComponent {

    @Input() data: any;

    Counter(min, max) {
        let numbers;

        numbers = Array(max);
        numbers = numbers.fill();
        numbers = numbers.map( ( x, i ) => ( i + 1 ) );
        numbers = numbers.slice( min - 1, max );
        return numbers;
    }

    getUrl(base, num) {
        let url;
        url = base ? base : './';
        url = num > 1 ? url + '/pagina/' + num : url;
        return url;
    }
}
