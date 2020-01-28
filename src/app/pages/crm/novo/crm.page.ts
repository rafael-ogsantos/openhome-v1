import { Component } from '@angular/core';

@Component({
    templateUrl: './crm.page.html',
    styleUrls: [ './crm.page.scss' ]
})

export class CRMPageComponent {

    form: any = {
        type: {},
        master: [],
        franquia: []

    };

    constructor() {
        this.getType();
        this.getMaster();
        this.getFranquia();
    }

    private getType() {
        let json;

        json = {
            type: 'btn-checkbox',
            col: 'col-12',
            name: 'crm-franquia',
            selected: 'master',
            options: [
                { title: 'Franquia Master', value: 'master' },
                { title: 'Franquia', value: 'franquia' }
            ]
        };
        this.form.type = json;
    }

    private getMaster() {
        let json; json = [];

        json.push({
            title: 'Setor',
            type: 'select',
            col: 'col-7',
            name: 'crm-setor',
            options: [
                { title: 'Suporte', value: 'suporte' },
                { title: 'Financeiro', value: 'financeiro' },
                { title: 'Jurídico', value: 'juridico' },
                { title: 'Marketing', value: 'marketing' },
                { title: 'Contábil', value: 'contabil' },
                { title: 'Engenharia', value: 'engenharia' },
                { title: 'Ouvidoria', value: 'ouvidoria' },
                { title: 'Treinamento', value: 'treinamento' },
                { title: 'Administração', value: 'administracao' }
            ]
        });

        json.push({
            title: 'Assunto',
            type: 'text',
            col: 'col-12',
            name: 'crm-assunto',
            // required: true
        });

        json.push({
            title: 'Descrição',
            type: 'textarea',
            col: 'col-12',
            name: 'crm-descricao',
            // required: true
        });

        json.push({
            title: 'Referente',
            type: 'text',
            col: 'col-4',
            name: 'crm-referente',
            // required: true
        });

        this.form.master = json;
    }



    private getFranquia() {
        let json; json = [];

        json.push({
            title: 'Setor',
            type: 'select',
            col: 'col-7',
            name: 'crm-setor',
            options: [
                { title: 'Suporte', value: 'suporte' },
                { title: 'Financeiro', value: 'financeiro' },
                { title: 'Jurídico', value: 'juridico' },
                { title: 'Marketing', value: 'marketing' },
                { title: 'Contábil', value: 'contabil' },
                { title: 'Engenharia', value: 'engenharia' },
                { title: 'Ouvidoria', value: 'ouvidoria' },
                { title: 'Treinamento', value: 'treinamento' },
                { title: 'Administração', value: 'administracao' }
            ]
        });


        json.push({
            title: 'Regiões',
            col: 'col-5',
            name: 'crm-regioes',
            type: 'select',
            options: [
                { title: 'São Paulo', value: 'sp' },
                { title: 'Rio de Janeiro', value: 'rj' },
                { title: 'Paraiba', value: 'pb' }
            ]
        });

        json.push({
            title: 'Assunto',
            type: 'text',
            col: 'col-12',
            name: 'crm-assunto',
            // required: true
        });

        json.push({
            title: 'Descrição',
            type: 'textarea',
            col: 'col-12',
            name: 'crm-descricao',
            // required: true
        });

        json.push({
            title: 'Referente',
            type: 'text',
            col: 'col-4',
            name: 'crm-referente',
            // required: true
        });

        this.form.franquia = json;
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
