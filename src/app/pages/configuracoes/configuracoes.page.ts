import { Component } from '@angular/core';

@Component({
    templateUrl: './configuracoes.page.html',
    styleUrls: [ './configuracoes.page.scss' ]
})

export class ConfigPageComponent {

    usuario: any = {
        type: {},
        cliente: [],
        franquia: [],
        representante: {
            show: 'franquia',
            data: []
        },
        avatar: {}
    };

    constructor() {
        this.getType();
        this.getCliente();
        this.getFranquia();
        this.getRepresentante();
        this.getAvatar();
    }

    private getType() {
        let json; json = [];

        json = {
            type: 'btn-checkbox',
            col: 'col-12',
            name: 'tipo-de-usuario',
            selected: 'cliente',
            options: [
                { title: 'Usuário Cliente', value: 'cliente' },
                { title: 'Usuário Franquia', value: 'franquia' }
            ]
        };

        this.usuario.type = json;
    }

    private getCliente() {
        let json; json = [];

        json.push({
            title: 'Nome completo',
            name: 'nome-completo',
            type: 'text',
            col: 'col-12 col-lg-7',
            // required: true
        });

        json.push({
            title: 'CPF',
            name: 'cpf',
            type: 'text',
            col: 'col-12 col-lg-5',
            // required: true
        });

        json.push({
            title: 'RG',
            name: 'rg',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Local de Emissão',
            name: 'local-de-emissao',
            type: 'text',
            col: 'col-12 col-lg-6',
            // required: true
        });

        json.push({
            title: 'Telefone',
            name: 'telefone',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Celular',
            name: 'celular',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'E-mail',
            name: 'email',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Estado Civil',
            name: 'estado-civil',
            type: 'select',
            col: 'col-12 col-lg-6',
            options: [
                { title: 'Sim', value: 'sim' },
                { title: 'Não', value: 'nao' }
            ],
            // required: true
        });

        json.push({
            title: 'Profissão',
            name: 'profissao',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Sexo',
            name: 'sexo',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Data de Nascimento',
            name: 'data-de-nascimento',
            type: 'date',
            col: 'col-12 col-lg-6',
            // required: true
        });

        json.push({
            title: 'Endereço',
            name: 'endereco',
            type: 'text',
            col: 'col-12 col-lg-4',
            // required: true
        });

        json.push({
            title: 'Número',
            name: 'numero',
            type: 'text',
            col: 'col-12 col-sm-6 col-lg-2',
            // required: true
        });

        json.push({
            title: 'Complemento',
            name: 'complemento',
            type: 'text',
            col: 'col-12 col-sm-6 col-lg-2',
            // required: true
        });

        json.push({
            title: 'Estado',
            name: 'estado',
            type: 'text',
            col: 'col-12 col-lg-4',
            // required: true
        });

        this.usuario.cliente = json;
    }



    private getFranquia() {
        let json; json = [];

        json.push({
            title: 'Nome da empresa',
            name: 'nome-da-empresa',
            type: 'text',
            col: 'col-12 col-lg-7',
            // required: true
        });

        json.push({
            title: 'CNPJ',
            name: 'cnpj',
            type: 'text',
            col: 'col-12 col-lg-5',
            // required: true
        });

        json.push({
            title: 'Telefone',
            name: 'telefone',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Celular',
            name: 'celular',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'E-mail',
            name: 'email',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Endereço',
            name: 'endereco',
            type: 'text',
            col: 'col-12 col-lg-4',
            // required: true
        });

        json.push({
            title: 'Número',
            name: 'numero',
            type: 'text',
            col: 'col-12 col-sm-6 col-lg-2',
            // required: true
        });

        json.push({
            title: 'Complemento',
            name: 'complemento',
            type: 'text',
            col: 'col-12 col-sm-6 col-lg-2',
            // required: true
        });

        json.push({
            title: 'Estado',
            name: 'estado',
            type: 'text',
            col: 'col-12 col-lg-4',
            // required: true
        });

        this.usuario.franquia = json;
    }

    private getAvatar() {
        this.usuario.avatar = {
            title: 'Alterar Imagem',
            avatar: './assets/img/avatar.png',
            name: 'avatar',
            type: 'upload-avatar'
        };
    }

    private getRepresentante() {

        let json; json = [];

        json.push({
            title: 'Nome completo',
            name: 'nome-completo',
            type: 'text',
            col: 'col-12 col-lg-7',
            // required: true
        });

        json.push({
            title: 'CPF',
            name: 'cpf',
            type: 'text',
            col: 'col-12 col-lg-5',
            // required: true
        });

        json.push({
            title: 'RG',
            name: 'rg',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Local de Emissão',
            name: 'local-de-emissao',
            type: 'text',
            col: 'col-12 col-lg-6',
            // required: true
        });

        json.push({
            title: 'Telefone',
            name: 'telefone',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Celular',
            name: 'celular',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'E-mail',
            name: 'email',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Estado Civil',
            name: 'estado-civil',
            type: 'select',
            col: 'col-12 col-lg-6',
            options: [
                { title: 'Sim', value: 'sim' },
                { title: 'Não', value: 'nao' }
            ],
            // required: true
        });

        json.push({
            title: 'Profissão',
            name: 'profissao',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Sexo',
            name: 'sexo',
            type: 'text',
            col: 'col-12 col-lg-3',
            // required: true
        });

        json.push({
            title: 'Data de Nascimento',
            name: 'data-de-nascimento',
            type: 'date',
            col: 'col-12 col-lg-6',
            // required: true
        });

        json.push({
            title: 'Endereço',
            name: 'endereco',
            type: 'text',
            col: 'col-12 col-lg-4',
            // required: true
        });

        json.push({
            title: 'Número',
            name: 'numero',
            type: 'text',
            col: 'col-12 col-sm-6 col-lg-2',
            // required: true
        });

        json.push({
            title: 'Complemento',
            name: 'complemento',
            type: 'text',
            col: 'col-12 col-sm-6 col-lg-2',
            // required: true
        });

        json.push({
            title: 'Estado',
            name: 'estado',
            type: 'text',
            col: 'col-12 col-lg-4',
            // required: true
        });

        this.usuario.representante.data = json;
    }

    setCadastro(ev, form) {
        ev.preventDefault();
        let data;

        data = this.Serialize(form);
        console.log( data );
    }

    private Serialize(form) {
        let i, show, input;
        show = [];
        for ( i = 0; i < form.length; i++ ) {
            input = form[i];
            if ( input.name ) {
                if ( input.type === 'radio' || input.type === 'checkbox' ) {
                    if ( input.checked ) { show[input.name] = (input.value ? input.value : input.checked); }
                } else if ( input.type === 'file' ) {
                    show[input.name] = input.files[1] ? (input.files ? input.files : '') : input.files[0];
                } else {
                    show[input.name] = input.value;
                }
            }
        }
        return show;
    }
}
