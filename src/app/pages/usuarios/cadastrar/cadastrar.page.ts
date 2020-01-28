import { Component } from '@angular/core';

@Component({
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss']
})

export class CadastrarUsuariosComponent {

    usuario: any = {
        type: [],
        cliente: [],
        franquia: []
    };

    constructor() {
        // this.getInputs();
        // this.getFranquia();
        this.getType();
        this.getCliente();
        this.getFranquia();
    }

    public setCadastro(ev, form) {
        ev.preventDefault();

        // Dados de cadastro para o BACKEND na variavel form
        console.log( form );
    }

    private getType() {
        this.usuario.type = {
            type: 'btn-checkbox',
            col: 'col-12',
            name: 'tipo-de-usuario',
            selected: 'cliente',
            options: [
                {
                    title: 'Usuário Cliente',
                    value: 'cliente',
                    col: 'col-12 col-md-6 col-lg-4 col-xl-3'
                },

                {
                    title: 'Usuário Franquia',
                    value: 'franquia',
                    col: 'col-12 col-md-6 col-lg-4 col-xl-3'
                }
            ],
            required: true
        };
    }


    private getFranquia() {
        let franquia; franquia = [];

        // Segmento (Select)
        franquia.push({
            title: 'Segmento',
            name: 'segmento',
            col: 'col-12 col-lg-6 col-xl-4',
            type: 'select',
            options: [
                { title: 'OpenClub', value: 'openclub', checked: true },
                { title: 'OpenHome', value: 'openhome' },
                { title: 'OpenService', value: 'openservice' },
                { title: 'OpenHome/OpenClub', value: 'openhome-openclub' },
                { title: 'OpenHome/OpenService', value: 'openhome-openservice' },
                { title: 'OpenClub/OpenService', value: 'openclub-openservice' },
                { title: 'OpenHome/OpenClub/OpenService', value: 'openhome-open-club-openservice' },
            ],
            required: true
        });

        // Usuario ligado (Select)
        franquia.push({
            title: 'Usuário está ligado a um contrato ou a um imóvel cadastrado no sistema ?',
            name: 'usuario-ligado',
            col: 'col-12 col-lg-6 col-xl-8',
            type: 'select',
            options: [
                { title: 'Sim', value: 'sim' },
                { title: 'Não', value: 'nao' }
            ],
            required: true
        });

        // Nome completo (Input)
        franquia.push({
            title: 'Nome completo',
            name: 'nome-completo',
            col: 'col-12 col-xl-7',
            type: 'text',
            required: true
        });

        // CPF (Input)
        franquia.push({
            title: 'CNPJ',
            name: 'cnpj',
            col: 'col-12 col-xl-5',
            type: 'text',
            required: true
        });

        // RG (Input)
        franquia.push({
            title: 'Razão Social',
            name: 'razao-social',
            col: 'col-12 col-xl-3',
            type: 'text',
            required: true
        });

        // Local de emissão (Input)
        franquia.push({
            title: 'Local de emissão',
            name: 'local-de-emissao',
            col: 'col-12 col-xl-5',
            type: 'text',
            required: true
        });

        // Telefone (Input)
        franquia.push({
            title: 'Telefone',
            name: 'telefone',
            col: 'col-12 col-xl-4',
            type: 'text',
            required: true
        });

        // Celular (Input)
        franquia.push({
            title: 'Celular',
            name: 'celular',
            col: 'col-12 col-xl-3',
            type: 'text',
            required: true
        });

        // Email (Input)
        franquia.push({
            title: 'Email',
            name: 'telefone',
            col: 'col-12 col-xl-3',
            type: 'text',
            required: true
        });

        // Estado Civil (Select)
        franquia.push({
            title: 'Estado Civil',
            name: 'estado-civil',
            col: 'col-12 col-xl-6',
            type: 'select',
            options: [
                { title: 'Solteiro', value: 'solteiro' }
            ],
            required: true
        });

        // Profissão (Input)
        franquia.push({
            title: 'Profissão',
            name: 'profissao',
            col: 'col-12 col-xl-3',
            type: 'text',
            required: true
        });

        // Sexo (Input)
        franquia.push({
            title: 'Sexo',
            name: 'sexo',
            col: 'col-12 col-xl-3',
            type: 'text',
            required: true
        });

        // Data de Nascimento (Input)
        franquia.push({
            title: 'Data de nascimento',
            name: 'data-de-nascimento',
            col: 'col-12 col-xl-6',
            type: 'date',
            required: true
        });

        // Endereço (Input)
        franquia.push({
            title: 'Endereço',
            name: 'endereco',
            col: 'col-12 col-xl-6',
            type: 'text',
            required: true
        });

        // Número (Input)
        franquia.push({
            title: 'Número',
            name: 'numero',
            col: 'col-12 col-xl-3',
            type: 'text',
            required: true
        });

        // Complemento (Input)
        franquia.push({
            title: 'Complemento',
            name: 'complemento',
            col: 'col-12 col-xl-3',
            type: 'text',
            required: true
        });

        // Estado (Input)
        franquia.push({
            title: 'Usuário Administrador',
            name: 'usuario-administrador',
            col: 'col-12 col-xl-5',
            type: 'select',
            options: [
                { title: 'Usuário 01', value: '10293132' },
                { title: 'Usuário 02', value: '10293132' },
                { title: 'Usuário 03', value: '10293132' },
                { title: 'Usuário 04', value: '10293132' },
                { title: 'Usuário 05', value: '10293132' }
            ],
            required: true
        });

        // Estado (Input)
        franquia.push({
            title: 'Estado',
            name: 'estado',
            col: 'col-12 col-xl-4',
            type: 'text',
            required: true
        });

        // Estado (Input)
        franquia.push({
            title: 'Upload de foto',
            icon: 'add_circle_outline',
            name: 'img-upload',
            type: 'upload-box',
            col: 'col-12',
            accept: 'image/jpeg, image/png',
            // multiple: true
        });

        this.usuario.franquia = franquia;
    }

  // Gera os campos do formulário
  private getCliente() {
    let cliente; cliente = [];

    // Segmento (Select)
    cliente.push({
        title: 'Segmento',
        name: 'segmento',
        col: 'col-12 col-lg-6 col-xl-4',
        type: 'select',
        options: [
            { title: 'OpenClub', value: 'openclub', checked: true },
            { title: 'OpenHome', value: 'openhome' },
            { title: 'OpenService', value: 'openservice' },
            { title: 'OpenHome/OpenClub', value: 'openhome-openclub' },
            { title: 'OpenHome/OpenService', value: 'openhome-openservice' },
            { title: 'OpenClub/OpenService', value: 'openclub-openservice' },
            { title: 'OpenHome/OpenClub/OpenService', value: 'openhome-open-club-openservice' },
        ],
        required: true
    });

    // Usuario ligado (Select)
    cliente.push({
        title: 'Usuário está ligado a um contrato ou a um imóvel cadastrado no sistema ?',
        name: 'usuario-ligado',
        col: 'col-12 col-lg-6 col-xl-8',
        type: 'select',
        options: [
            { title: 'Sim', value: 'sim' },
            { title: 'Não', value: 'nao' }
        ],
        required: true
    });

    // Nome completo (Input)
    cliente.push({
        title: 'Nome completo',
        name: 'nome-completo',
        col: 'col-12 col-xl-7',
        type: 'text',
        required: true
    });

    // CPF (Input)
    cliente.push({
        title: 'CPF',
        name: 'cpf',
        col: 'col-12 col-xl-5',
        type: 'text',
        required: true
    });

    // RG (Input)
    cliente.push({
        title: 'RG',
        name: 'rg',
        col: 'col-12 col-xl-3',
        type: 'text',
        required: true
    });

    // Local de emissão (Input)
    cliente.push({
        title: 'Local de emissão',
        name: 'local-de-emissao',
        col: 'col-12 col-xl-5',
        type: 'text',
        required: true
    });

    // Telefone (Input)
    cliente.push({
        title: 'Telefone',
        name: 'telefone',
        col: 'col-12 col-xl-4',
        type: 'text',
        required: true
    });

    // Celular (Input)
    cliente.push({
        title: 'Celular',
        name: 'celular',
        col: 'col-12 col-xl-3',
        type: 'text',
        required: true
    });

    // Email (Input)
    cliente.push({
        title: 'Email',
        name: 'telefone',
        col: 'col-12 col-xl-3',
        type: 'text',
        required: true
    });

    // Estado Civil (Select)
    cliente.push({
        title: 'Estado Civil',
        name: 'estado-civil',
        col: 'col-12 col-xl-6',
        type: 'select',
        options: [
            { title: 'Solteiro', value: 'solteiro' }
        ],
        required: true
    });

    // Profissão (Input)
    cliente.push({
        title: 'Profissão',
        name: 'profissao',
        col: 'col-12 col-xl-3',
        type: 'text',
        required: true
    });

    // Sexo (Input)
    cliente.push({
        title: 'Sexo',
        name: 'sexo',
        col: 'col-12 col-xl-3',
        type: 'text',
        required: true
    });

    // Data de Nascimento (Input)
    cliente.push({
        title: 'Data de nascimento',
        name: 'data-de-nascimento',
        col: 'col-12 col-xl-6',
        type: 'date',
        required: true
    });

    // Endereço (Input)
    cliente.push({
        title: 'Endereço',
        name: 'endereco',
        col: 'col-12 col-xl-4',
        type: 'text',
        required: true
    });

    // Número (Input)
    cliente.push({
        title: 'Número',
        name: 'numero',
        col: 'col-12 col-xl-2',
        type: 'text',
        required: true
    });

    // Complemento (Input)
    cliente.push({
        title: 'Complemento',
        name: 'complemento',
        col: 'col-12 col-xl-2',
        type: 'text',
        required: true
    });

    // Estado (Input)
    cliente.push({
        title: 'Estado',
        name: 'estado',
        col: 'col-12 col-xl-4',
        type: 'text',
        required: true
    });

    // Estado (Input)
    cliente.push({
        title: 'Upload de foto',
        icon: 'add_circle_outline',
        name: 'img-upload',
        type: 'upload-box',
        col: 'col-12',
        accept: 'image/jpeg, image/png',
        // multiple: true
    });

    this.usuario.cliente = cliente;

  }
}
