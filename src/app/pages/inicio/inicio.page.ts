import { Component } from '@angular/core';

@Component({
    templateUrl: './inicio.page.html',
    styleUrls: ['./inicio.page.scss']
})

export class HomePageComponent {

    boxes: any;

    constructor() {
        let boxes; boxes = {};

        // Configuração do container Visualização
        boxes.visualizacao = {};
        boxes.visualizacao.title = 'Visualização';
        boxes.visualizacao.chart = this.getChart();
        boxes.visualizacao.imovel = this.getImovel();

        // Configuração do container Valor
        boxes.valor = {};
        boxes.valor.title = 'Valor a receber';
        boxes.valor.select = this.getPeriodo();
        boxes.valor.calc = this.getCalc();

        // Configuração do container Mensagens
        boxes.messages = {};
        boxes.messages.title = 'Mensagens';
        boxes.messages.data = this.getMessages();

        // Configuração do container Vendas
        boxes.vendas = {};
        boxes.vendas.title = 'Vendas';
        boxes.vendas.chart = this.getVendas();

        this.boxes = boxes;
    }

    private getChart() {
        return {
            datasets: [
                {
                    data: [ 0, 6, 4, 5, 14, 8, 33, 9, 16, 7, 15, 2 ],
                    label: 'Clicks',
                    pointBackgroundColor: 'transparent'
                },

                {
                    data: [0, 23, 2, 8, 22, 6, 8, 12, 4, 8, 28, 2 ],
                    label: 'Visits',
                    pointBackgroundColor: 'transparent'
                }
            ],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                tooltips: {
                    backgroundColor: 'rgba(71, 103, 118, .9)',
                    displayColors: false,
                    mode: 'point',
                    position: 'average',
                    bodyFontSize: 16,
                    titleFontSize: 0,
                    titleMarginBottom: 0,
                    titleSpacing: 0,
                    xPadding: 12,
                    yPadding: 12,
                    callbacks: {
                        label: function (tooltipItem, data) {
                            const datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
                            return  tooltipItem.yLabel + ' ' + datasetLabel;
                        }
                    }
                }
            }
        };
    }

    private getImovel() {
        return {
            image: './assets/img/imovel.png',
            title: 'Nome do imóvel'
        };
    }

    private getPeriodo() {
        return {
            title: 'Período',
            config: {
                col: 'col-12',
                type: 'select',
                selected: 7,
                options: [
                    { title: '7 dias', value: 7, selected: true },
                    { title: '15 dias', value: 15 }
                ]
            }
        };
    }

    private getCalc() {
        return {
            imoveis: {
                title: 'De imóveis',
                valor: 100
            },
            franqueados: {
                title: 'De franquiados',
                valor: 250
            }
        };
    }

    private getMessages() {
        let messages; messages = [];

        messages.push({
            id: 1,
            name: 'Ritika Singh',
            avatar: {
                url: './assets/img/avatar.png',
                width: 32,
                height: 32
            },
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quos officiis quisquam.',
            url: '/mensagem/anderson/1234232133'
        });

        messages.push({
            id: 2,
            name: 'Uma Ram',
            avatar: {
                url: './assets/img/avatar.png',
                width: 32,
                height: 32
            },
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quos officiis quisquam.',
            // url: '/mensagem/anderson/1234232133'
        });

        messages.push({
            id: 3,
            name: 'Uma Ram',
            avatar: {
                url: './assets/img/avatar.png',
                width: 32,
                height: 32
            },
            caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi quos officiis quisquam.',
            // url: '/mensagem/anderson/1234232133'
        });

        return messages;
    }

    private getVendas() {
        return {
            datasets: [
                { data: [ 9, 28, 25, 30, 23, 36 ], label: 'Apartamentos' },
                { data: [ 12, 16, 11, 24, 14, 16 ], label: 'Casas' }
            ],
            legend: true,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'top',
                    labels: {
                        hidden: true,
                        fontColor: '#476776',
                        fillStyle: '#FFFFFF',
                    }
                },
                tooltips: {
                    intersect: false,
                    backgroundColor: '#476776',
                    displayColors: false,
                    mode: 'point',
                    position: 'nearest',
                    bodyFontSize: 12,
                    titleFontSize: 0,
                    titleMarginBottom: 0,
                    titleSpacing: 0,
                    xPadding: 12,
                    yPadding: 12
                }
            },
            colors: [
                { // Roxo
                    fill: false,
                    backgroundColor: 'transparrent',
                    borderColor: 'rgba(84, 70, 162,0.9)',
                    pointBackgroundColor: '#FFF',
                    pointBorderColor: 'rgba(84, 70, 162,.9)',
                    pointHoverBackgroundColor: 'transparent',
                    pointHoverBorderColor: 'rgba(84, 70, 162,0.5)'
                },
                { // Rosa
                    fill: false,
                    backgroundColor: 'transparent',
                    borderColor: 'rgba(224, 159, 153,0.9)',
                    pointBackgroundColor: 'transparent',
                    pointBorderColor: 'rgba(224, 159, 153,0.9)',
                    pointHoverBackgroundColor: 'transparent',
                    pointHoverBorderColor: 'rgba(224, 159, 153,0.5)'
                }
            ]
        };
    }

}
