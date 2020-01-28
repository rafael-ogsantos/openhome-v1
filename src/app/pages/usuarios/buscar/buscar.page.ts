import { Component } from '@angular/core';

@Component({
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss']
})

export class BuscarUsuariosComponent {

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
        titles: [ 'Usuário', 'Email', 'Segmento', 'Ações' ],
        names: [ 'usuario', 'email', 'segmento', 'acoes' ],
        data: [
            {
                id: 1,
                avatar: './assets/img/avatar.png',
                usuario: 'Amanda Santos',
                email: 'amandasantos@gmail.com',
                segmento: 'Usuário',
                data: '2010-03-05 10:43:21'
            },

            {
                id: 2,
                avatar: './assets/img/avatar.png',
                usuario: 'Roberto Leal',
                email: 'robertoleal@gmail.com',
                segmento: 'Usuário',
                data: '2016-03-01 12:25:42'
            },

            {
                id: 3,
                avatar: './assets/img/avatar.png',
                usuario: 'Amanda Santos',
                email: 'amandasantos@gmail.com',
                segmento: 'Usuário',
                data: '2018-05-12 05:21:36'
            },

            {
                id: 4,
                avatar: './assets/img/avatar.png',
                usuario: 'Roberto Leal',
                email: 'robertoleal@gmail.com',
                segmento: 'Usuário',
                data: '2018-09-05 00:00:00'
            }
        ]
    };

    paginacao: any = {
        baseUrl: '/usuarios/buscar',
        current: 1,
        start: 1,
        end: 5
    };

    constructor() { }
}
