import { Component } from '@angular/core';

@Component({
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss']
})

export class BuscarImoveisComponent {

  // Capture o valor da busca usando {{ buscar.value }}
  buscar: any = {
    title: 'Buscando',
    value: ''
  };

  // Capture o valor do filtro usando {{ filtros.selected }}
  filtros: any = {
    // selected: '',
    options: [
      { title: 'Todos', value: '' },
      { title: 'Casa condomínio', value: 'condominio' },
      { title: 'Casa', value: 'casa' }
    ]
  };

  imoveis: any = [
    // Imovél 01
    {
      id: 1,
      thumb: './assets/img/buscar-imovel.png',
      title: 'Nome do imóvel',
      tipo: 'Casa condominio',
      categoria: 'condominio',
      area: {
        total: '130m²',
        privativa: '110m²',
      },
      quartos: 4,
      banheiros: 2,
      map: {
        lat: 60.5793,
        lng: 12.8143,
      },
      valor: 'R$ 750.000,000'
    },

    // Imovel 02
    {
      id: 2,
      thumb: './assets/img/buscar-imovel.png',
      title: 'Nome do imóvel',
      tipo: 'Casa condominio',
      categoria: 'casa',
      area: {
        total: '130m²',
        privativa: '110m²'
      },
      quartos: 4,
      banheiros: 2,
      map: {
        lat: 10.5793,
        lng: 92.8143
      },
      valor: 'R$ 750.000,000'
    },

    // Imovel 03
    {
      id: 3,
      thumb: './assets/img/buscar-imovel.png',
      title: 'Nome do imóvel',
      tipo: 'Casa condominio',
      categoria: 'condominio',
      area: {
        total: '130m²',
        privativa: '110m²'
      },
      quartos: 4,
      banheiros: 2,
      map: {
        lat: 18.5793,
        lng: 73.8143
      },
      valor: 'R$ 750.000,000'
    }
  ];

  paginacao: any = {
    baseUrl: '/usuarios/buscar',
    current: 1,
    start: 1,
    end: 5
  };

  constructor() {}

  checkQuery(imovel, buscando, filtro) {
  
    let res; res = true;
    if (filtro) {
      res = (imovel.categoria === filtro) ? true : false;
    }
    if (buscando.length > 0) {
      res = imovel.title.search( new RegExp(buscando, 'i') ) >= 0 ? true : false;
    }
    return res;
  }

}
