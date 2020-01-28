import { Component } from '@angular/core';

@Component({
    templateUrl: './novo.page.html',
    styleUrls: ['./novo.page.scss']
})

export class FinanceiroNovoComponent {

    // Capture o valor do filtro usando {{ filtros.selected }}
    filtros: any = {
        selected: 'recentes',
        options: [
          { title: 'Mais recentes', value: 'recentes' },
          { title: 'Mais populares', value: 'populares' }
        ]
    };

    inputs: any = [];
    representante: any = [];
    financeiro: any = [];
    doc: any = {
        title: 'Contrato de imóvel',
        url: 'none.pdf',
        button: 'primary' // material theme color
   };

    constructor() {
        this.getInputs();
        this.getRepresentante();
        this.getFinanceiro();
    }

    private getInputs() {

        this.inputs.push({
            title: 'Venda de imóvel',
            name: 'venda-de-imovel',
            col: 'col-12 col-lg-7',
            type: 'select',
            options: [
                { title: 'Opcao 01', value: 'opcao-01' },
                { title: 'Opcao 02', value: 'opcao-02' },
                { title: 'Opcao 03', value: 'opcao-03' }
            ]
        });

        this.inputs.push({
            type: 'btn-checkbox',
            col: 'col-12',
            name: 'tipos',
            color: 'green',
            selected: 'receita',
            options: [
                { title: 'Receita', value: 'receita' },
                { title: 'Débito', value: 'debito' }
            ]
        });

        this.inputs.push({
            title: 'Empresa',
            name: 'empresa',
            col: 'col-12 col-lg-8',
            type: 'select',
            options: [
                { title: 'Opcao 01', value: 'opcao-01' },
                { title: 'Opcao 02', value: 'opcao-02' },
                { title: 'Opcao 03', value: 'opcao-03' }
            ]
        });

        this.inputs.push({
            title: 'Nome da Empresa',
            name: 'nome-da-empresa',
            col: 'col-12 col-lg-8',
            type: 'text',
            // required: true
        });

        this.inputs.push({
            title: 'CNPJ',
            name: 'cnpj',
            col: 'col-12 col-lg-4',
            type: 'text',
            // required: true
        });

        this.inputs.push({
            title: 'Endereço',
            name: 'endereco',
            col: 'col-12 col-lg-4',
            type: 'text',
            // required: true
        });

        this.inputs.push({
            title: 'Número',
            name: 'numero',
            col: 'col-12 col-sm-6 col-lg-2',
            type: 'text',
            // required: true
        });

        this.inputs.push({
            title: 'Complemento',
            name: 'complemento',
            col: 'col-12 col-sm-6 col-lg-2',
            type: 'text',
            // required: true
        });

        this.inputs.push({
            title: 'Cidade',
            name: 'cidade',
            col: 'col-12 col-lg-4',
            type: 'text',
            // required: true
        });

        this.inputs.push({
            title: 'Estado',
            name: 'estado',
            col: 'col-12 col-sm-6 col-lg-4',
            type: 'text',
            // required: true
        });

        this.inputs.push({
            title: 'Telefone',
            name: 'telefone',
            col: 'col-12 col-sm-6 col-lg-4',
            type: 'text',
            // required: true
        });

        this.inputs.push({
            title: 'Descricao',
            name: 'descricao',
            col: 'col-12',
            type: 'textarea',
            // required: true
        });
    }


    public getRepresentante() {

        this.representante.push({
            title: 'Nome do Responsável',
            name: 'representante[nome]',
            col: 'col-12 col-lg-8',
            type: 'text',
            // required: true
        });

        this.representante.push({
            title: 'CPF',
            name: 'representante[cpf]',
            col: 'col-12 col-lg-4',
            type: 'text',
            // required: true
        });

        this.representante.push({
            title: 'E-mail',
            name: 'representante[email]',
            col: 'col-12 col-lg-4',
            type: 'text',
            // required: true
        });

        this.representante.push({
            title: 'Telefone',
            name: 'representante[telefone]',
            col: 'col-12 col-lg-3',
            type: 'text',
            // required: true
        });

        this.representante.push({
            title: 'Endereço',
            name: 'representante[endereco]',
            col: 'col-12 col-lg-3',
            type: 'text',
            // required: true
        });

        this.representante.push({
            title: 'Número',
            name: 'representante[numero]',
            col: 'col-12 col-sm-6 col-lg-2',
            type: 'text',
            // required: true
        });

        this.representante.push({
            title: 'Complemento',
            name: 'representante[complemento]',
            col: 'col-12 col-sm-6 col-lg-2',
            type: 'text',
            // required: true
        });

        this.representante.push({
            title: 'Cidade',
            name: 'representante[cidade]',
            col: 'col-12 col-lg-4',
            type: 'text',
            // required: true
        });

        this.representante.push({
            title: 'Estado',
            name: 'representante[estado]',
            col: 'col-12 col-lg-4',
            type: 'text',
            // required: true
        });
    }


    private getFinanceiro() {

        this.financeiro.push({
            title: 'Valor',
            name: 'financeiro[valor]',
            col: 'col-12 col-lg-6',
            type: 'text',
            // required: true
        });

        this.financeiro.push({
            title: 'Data de vencimento',
            name: 'financeiro[vencimento]',
            col: 'col-12 col-md-6 col-lg-3',
            type: 'date',
            // required: true
        });

        this.financeiro.push({
            title: 'Se repete?',
            name: 'financeiro[repetir]',
            col: 'col-12 col-md-6 col-lg-3',
            type: 'select',
            options: [
                { title: 'Sim', value: 'sim' },
                { title: 'Não', value: 'nao' }
            ]
            // required: true
        });
    }

    setCadastro(ev, form) {
        ev.preventDefault();

        // Dados de cadastro para o BACKEND na variavel form
        console.log( this.Serialize(form) );
    }

    private Serialize(form) {
        if (!form || form.nodeName !== 'FORM') {
            return;
        }
        let i, j, obj;
        obj = {};
        for (i = form.elements.length - 1; i >= 0; i = i - 1) {
            if (form.elements[i].name === '') {
            continue;
        }
        switch (form.elements[i].nodeName) {
        case 'INPUT':
            switch (form.elements[i].type) {
            case 'text':
            case 'hidden':
            case 'password':
            case 'button':
            case 'reset':
            case 'submit':
                obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                break;
            case 'checkbox':
            case 'radio':
                if (form.elements[i].checked) {
                    obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                }
                break;
            case 'file':
                break;
            }
            break;
        case 'TEXTAREA':
            obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
            break;
        case 'SELECT':
            switch (form.elements[i].type) {
            case 'select-one':
                obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                break;
            case 'select-multiple':
                for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
                    if (form.elements[i].options[j].selected) {
                        obj[form.elements[i].name] = encodeURIComponent(form.elements[i].options[j].value);
                    }
                }
                break;
            }
            break;
        case 'BUTTON':
            switch (form.elements[i].type) {
            case 'reset':
            case 'submit':
            case 'button':
                obj[form.elements[i].name] = encodeURIComponent(form.elements[i].value);
                break;
            }
            break;
        }
    }
    return obj;
  }
}
