import { Component } from '@angular/core';

@Component({
    templateUrl: './cadastrar.page.html',
    styleUrls: ['./cadastrar.page.scss']
})

export class CadastrarImoveisComponent {

    objectKeys = Object.keys;
    data: any = {
        type: {},
        regioes: {
            sp: {
                type: {},
                proprietario: [],
                imovel: {
                    aluguel: [],
                    venda: [],
                    temporada: [],
                },
                preferencias: []
            },

            rj: {
                // type: {},
                proprietario: [],
                imovel: [],
                preferencias: []
            },

            pb: {
                type: {},
                proprietario: [],
                imovel: {
                    aluguel: [],
                    venda: [],
                    temporada: [],
                },
                preferencias: []
            },
        },
    };

    constructor() {
        this.data.type = this.getRegioes();

        // São Paulo
        this.data.regioes.sp.proprietario = this.getProprietario();
        this.data.regioes.sp.type = this.getType();
        this.data.regioes.sp.imovel = this.getImovel();
        this.data.regioes.sp.preferencias = this.getPreferencias();

        // Rio de janeiro
        this.data.regioes.rj.proprietario = this.getProprietario().reverse();
        // this.data.regioes.rj.type = this.getType();
        this.data.regioes.rj.imovel = this.getAluguel();
        this.data.regioes.rj.preferencias = this.getPreferencias();

        // Paraiba
        this.data.regioes.pb.proprietario = this.getProprietario();
        this.data.regioes.pb.type = this.getType();
        this.data.regioes.pb.imovel = this.getImovel();
        this.data.regioes.pb.preferencias = this.getPreferencias();
    }

    setCadastro(ev, form) {
        ev.preventDefault();
        // Dados de cadastro para o BACKEND na variavel form
    }

    // Função para serializar os campos do formulário
    private Serialize(el) {
        let i, ch, vl, v; v = {};
            for (i = 0; i < el.length - 1; i++) {
                ch = el[i], vl = el[i].type === ('checkbox' || 'radio') ? el[i].checked : el[i].value;
                v[el[i].name] = vl;
            }
        return v;
    }

    private getRegioes() {
        let json;

        // Input Estado civil
        json = {
            title: 'Regiões',
            name: 'regioes',
            col: 'col-12',
            type: 'select',
            selected: 'sp',
            options: [
                { title: 'São Paulo', value: 'sp' },
                { title: 'Rio de Janeiro', value: 'rj' },
                { title: 'Paraiba', value: 'pb' }
            ],
        };

        // this.data.regioes = json;
        return json;
    }


    // Adiciona os inputs do parte de proprietários
    private getProprietario() {
        let json; json = [];

        // Input Nome completo
        json.push({
            title: 'Nome completo',
            name: 'nome',
            col: 'col-12 col-lg-7',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input CPF
        json.push({
            title: 'CPF',
            name: 'cpf',
            col: 'col-12 col-lg-5',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input RG
        json.push({
            title: 'RG',
            name: 'rg',
            col: 'col-12 col-lg-4',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input Email
        json.push({
            title: 'Email',
            name: 'email',
            col: 'col-12 col-lg-4',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input Telefone
        json.push({
            title: 'Telefone',
            name: 'phone',
            col: 'col-12 col-lg-4',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input Profissao
        json.push({
            title: 'Profissão',
            name: 'profissao',
            col: 'col-12 col-lg-4',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input Estado civil
        json.push({
            title: 'Estado civil',
            name: 'estado-civil',
            col: 'col-12 col-lg-4',
            type: 'select',
            options: [
                { title: 'Solteiro', value: 'solteiro', checked: true },
                { title: 'Casado', value: 'casado' },
                { title: 'Separado', value: 'Separado' },
                { title: 'Divorciado', value: 'divorciado' },
                { title: 'Viúvo', value: 'viuvo' }
            ],
        });

        // Input Telefone
        json.push({
            title: 'CEP',
            name: 'cep',
            col: 'col-12 col-lg-4',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input Endereço
        json.push({
            title: 'Endereço',
            name: 'endereco',
            col: 'col-12 col-lg-6',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input Numero
        json.push({
            title: 'Número',
            name: 'numero',
            col: 'col-12 col-lg-3',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input Complemento
        json.push({
            title: 'Complemento',
            name: 'complemento',
            col: 'col-12 col-lg-3',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input Cidade
        json.push({
            title: 'Cidade',
            name: 'cidade',
            col: 'col-12 col-lg-4',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input Estado
        json.push({
            title: 'Estado',
            name: 'estado',
            col: 'col-12 col-lg-4',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // Input País
        json.push({
            title: 'País',
            name: 'pais',
            col: 'col-12 col-lg-4',
            type: 'text',
            required: true,
            // placeholder: 'Insira o placeholder'
        });

        // this.data.proprietario = json;
        return json;
    }

    private getType() {
        let json;
        json = {
            type: 'btn-checkbox',
            col: 'col-12',
            name: 'imovel-tipo',
            selected: 'aluguel',
            options: [
                { title: 'Aluguel', value: 'aluguel' },
                { title: 'Venda', value: 'venda' },
                { title: 'Temporada', value: 'temporada' },
            ],
            required: true
        };
        return json;
    }

    private getImovel() {
        let json;
        json = {
            aluguel: this.getAluguel(),
            venda: this.getAluguel().slice( 0, Math.floor((Math.random() * 10) + 5) ).reverse(),
            temporada: this.getAluguel().slice( 0, Math.floor((Math.random() * 10) + 5) )
        };
        return json;
    }

    private getAluguel() {
        let json; json = [];

        // Input Tipo de imóvel
        json.push({
            title: 'Tipo de Imóvel',
            name: 'tipo-de-imovel',
            col: 'col-12 col-lg-3',
            type: 'select',
            options: [
                { title: 'Apartamento', value: 'apartamento' },
                { title: 'Casa', value: 'casa', checked: true },
                { title: 'Sobrado', value: 'sobrado' },
                { title: 'Loft', value: 'loft' },
                { title: 'Kitnet', value: 'kitnet' },
                { title: 'Cobertura', value: 'cobertura' },
                { title: 'Loja', value: 'loja' },
                { title: 'Sala', value: 'sala' },
                { title: 'Galpão', value: 'galpao' },
                { title: 'Terreno', value: 'terreno' },
                { title: 'Sítio', value: 'sitio' },
                { title: 'Fazenda', value: 'fazenda' },
            ],
            required: true
        });

        // Input Área privativa
        json.push({
            title: 'Área privativa',
            name: 'area-privativa',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });

        // Input Área total
        json.push({
            title: 'Área total',
            name: 'area-total',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });

        // Input Número de quartos
        json.push({
            title: 'Número de quartos',
            name: 'numero-de-quartos',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });




        // Input Possui garagem
        json.push({
            title: 'Possui garagem',
            name: 'possui-garagem',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'select',
            options: [
                { title: 'Sim', value: 'sim' },
                { title: 'Não', value: 'nao' }
            ]
        });

        // Input Banheiros
        json.push({
            title: 'Banheiros',
            name: 'banheiros',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });

        // Input Situação do imóvel
        json.push({
            title: 'Situação do imóvel',
            name: 'situacao-do-imovel',
            col: 'col-12 col-lg-6',
            required: true,
            type: 'select',
            options: [
                { title: 'Lançamento', value: 'lancamento' },
                { title: 'Na Planta', value: 'na-planta' },
                { title: 'Novo', value: 'novo' },
                { title: 'Ocupado', value: 'ocupado' },
            ]
        });




        // Input Valor
        json.push({
            title: 'Valor',
            name: 'valor',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });

        // Input Comissão
        json.push({
            title: 'Comissão',
            name: 'comissao',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });

        // Input Corretagem
        json.push({
            title: 'Corretagem',
            name: 'corretagem',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });

        // Input Agenciamento
        json.push({
            title: 'Agenciamento',
            name: 'agenciamento',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });




        // Input Master
        json.push({
            title: 'Master',
            name: 'master',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });

        // Input Premium
        json.push({
            title: 'Premium',
            name: 'premium',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });

        // Input Loja
        json.push({
            title: 'Loja',
            name: 'loja',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });

        // Input Agenciamento
        json.push({
            title: 'Agenciador',
            name: 'agenciador',
            col: 'col-12 col-lg-3',
            required: true,
            type: 'text'
        });




        // Input Titulo do imóvel
        json.push({
            title: 'Titulo do imóvel',
            name: 'titulo-do-imovel',
            col: 'col-12 col-lg-10',
            required: true,
            type: 'text'
        });

        // Input Descrição
        json.push({
            title: 'Descrição',
            name: 'descricao',
            col: 'col-12',
            required: true,
            type: 'textarea'
        });

        // Input Descrição
        json.push({
            title: 'Upload de foto ou video',
            icon: 'add_circle_outline',
            name: 'upload-fotos',
            col: 'col-12',
            type: 'upload-box'
        });

        return json;
    }

    private getPreferencias() {
        let json; json = [];

        // Input Descrição
        json.push({
            title: 'Disponibilizar o imóvel para',
            name: 'disponibilizar-imovel',
            col: 'col-12 col-lg-5',
            required: true,
            type: 'select',
            options: [
                { title: 'Permitir corretagem de outras franquias', value: 'outras-franquias' },
                { title: 'Permitir somente anunciar na minha loja', value: 'minha-loja' },
                { title: 'Permitir somente à minha corretagem', value: 'minha-corretagem' },
                { title: 'Permitir somente à minha corretagem e anunciar na minha loja', value: 'corretagem-e-anunciar' },
            ]
        });

        // Input Descrição
        json.push({
            title: 'Exibir imóvel na internet',
            name: 'exibir-imovel',
            col: 'col-12 col-lg-7',
            required: true,
            type: 'checkbox',
            checked: false,
            color: 'primary'
        });

        // Input Descrição
        json.push({
            title: 'Anexar documento de autorização',
            icon: 'insert_drive_file',
            name: 'upload-doc',
            col: 'col-12',
            required: true,
            type: 'upload-file',
            color: 'primary'
        });

        // this.data.preferencias = json;
        return json;

    }

}
