import { Component } from '@angular/core';

@Component({
    templateUrl: 'contratos-e-documentos.page.html',
    styleUrls: ['contratos-e-documentos.page.scss']
})

export class ContratoseDocumentosComponent {

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

    docs: any = [];

    constructor() {
        this.docs = this.getDocs();
    }

    private getDocs() {
        let json; json = [];

        json.push({
            title: 'Contrato de franquia',
            url: 'none.pdf',
            button: 'primary' // material theme color
        });

        json.push({
            title: 'Contrato de franquia',
            url: 'none.pdf',
            button: 'primary' // material theme color
        });

        json.push({
            title: 'Contrato de franquia',
            url: 'none.pdf',
            button: 'primary' // material theme color
        });

        json.push({
            title: 'Contrato de franquia',
            url: 'none.pdf',
            button: 'primary' // material theme color
        });

        json.push({
            title: 'Contrato de franquia',
            url: 'none.pdf',
            button: 'primary' // material theme color
        });

        return json;
    }

    public setCadastro(ev, form) {
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
