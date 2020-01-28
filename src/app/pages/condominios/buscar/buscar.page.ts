import { Component } from '@angular/core';

@Component({
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss']
})

export class BuscarCondominiosComponent {

    // Capture o valor da busca usando {{ buscar.value }}
    buscar: any = {
        title: 'Buscando',
        value: ''
    };

    // Capture o valor do filtro usando {{ filtros.selected }}
    filtros: any = {
        selected: 'recentes',
        options: [
          { title: 'Mais recentes', value: 'recentes' },
          { title: 'Mais populares', value: 'populares' }
        ]
    };

    table = {
        titles: [ 'Condomínios', 'Cidade', 'Responsável', 'Ações' ],
        names: [ 'condominio', 'cidade', 'responsavel', 'acoes' ],
        data: [
            {
                id: 1,
                avatar: './assets/img/avatar.png',
                condominio: 'Condomínio Bela Vista',
                cidade: 'São Paulo/SP',
                responsavel: 'Otávio Mendes'
            },

            {
                id: 2,
                avatar: './assets/img/avatar.png',
                condominio: 'Condomínio Bela Vista',
                cidade: 'São Paulo/SP',
                responsavel: 'Otávio Mendes'
            },

            {
                id: 3,
                avatar: './assets/img/avatar.png',
                condominio: 'Condomínio Bela Vista',
                cidade: 'São Paulo/SP',
                responsavel: 'Otávio Mendes'
            },

            {
                id: 4,
                avatar: './assets/img/avatar.png',
                condominio: 'Condomínio Bela Vista',
                cidade: 'São Paulo/SP',
                responsavel: 'Otávio Mendes'
            },

            {
                id: 5,
                avatar: './assets/img/avatar.png',
                condominio: 'Condomínio Bela Vista',
                cidade: 'São Paulo/SP',
                responsavel: 'Otávio Mendes'
            },

            {
                id: 6,
                avatar: './assets/img/avatar.png',
                condominio: 'Condomínio Bela Vista',
                cidade: 'São Paulo/SP',
                responsavel: 'Otávio Mendes'
            },
        ]
    };

    paginacao = {
        baseUrl: '/condominios/buscar',
        current: 1,
        start: 1,
        end: 5
    };

    constructor() { }

}
