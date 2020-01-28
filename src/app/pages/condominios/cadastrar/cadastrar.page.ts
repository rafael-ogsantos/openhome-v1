import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss']
})
export class CadastrarCondominiosComponent {

    @ViewChild('boxResponsavel') template;

    // Where to insert the cloned content
    @ViewChild('novoBox', { read: ViewContainerRef }) container;


    inputs: any = new Array();
    construtora: any = new Array();
    responsavel: any = new Array();
    preferencias: any = new Array();
    novato: any = new Array();
    count = 0;

  constructor( private resolver: ComponentFactoryResolver ) {
    this.getInputs();
    this.getConstrutora();
    this.getPreferencias();
    this.responsavel = this.getResponsavel();
  }

    setCadastro(ev, form) {
        ev.preventDefault();

        // Dados de cadastro para o BACKEND na variavel form
        console.log( this.Serialize(form) );
    }


    getInputs() {

        // Nome do condomínio (Input)
        this.inputs.push({
            title: 'Nome do condomínio',
            name: 'nome-do-condominio',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-8',
            // required: true
        });

        // CNPJ (Input)
        this.inputs.push({
            title: 'CNPJ',
            name: 'cnpj',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-4',
            // required: true
        });

        // Número de blocos (Input)
        this.inputs.push({
            title: 'Número de blocos',
            name: 'numero-de-blocos',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-3',
            // required: true
        });

        // Área construída (Input)
        this.inputs.push({
            title: 'Área construída',
            name: 'area-construida',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-3',
            // required: true
        });

        // Área Total (Input)
        this.inputs.push({
            title: 'Área Total',
            name: 'area-total',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-3',
            // required: true
        });

        // Número de apartamentos/casas (Input)
        this.inputs.push({
            title: 'Número de apartamentos/casas',
            name: 'numero-de-apto-casas',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-3',
            // required: true
        });

        // Número de andares (Input)
        this.inputs.push({
            title: 'Número de andares',
            name: 'numero-de-andares',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-3',
            // required: true
        });

        // Telefone (Input)
        this.inputs.push({
            title: 'Telefone',
            name: 'telefone',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-3',
            // required: true
        });

        // Endereço (Input)
        this.inputs.push({
            title: 'Endereço',
            name: 'endereco',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-4',
            // required: true
        });

        // Número (Input)
        this.inputs.push({
            title: 'Número',
            name: 'numero',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-2',
            // required: true
        });

        // Complemento (Input)
        this.inputs.push({
            title: 'Complemento',
            name: 'complemento',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-2',
            // required: true
        });

        // Cidade (Input)
        this.inputs.push({
            title: 'Cidade',
            name: 'cidade',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-4',
            // required: true
        });

        // Estado (Input)
        this.inputs.push({
            title: 'Estado',
            name: 'estado',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-3',
            // required: true
        });

        // Telefone (Input)
        this.inputs.push({
            title: 'Telefone',
            name: 'telefone',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-3',
            // required: true
        });

        // Descrição (Input)
        this.inputs.push({
            title: 'Descrição',
            name: 'descricao',
            type: 'textarea',
            col: 'col-12',
            // required: true
        });

        // Estado (Input)
        this.inputs.push({
            title: 'Upload de foto',
            icon: 'add_circle_outline',
            name: 'img-upload',
            type: 'upload-box',
            col: 'col-12',
            accept: 'image/jpeg, image/png',
            // multiple: true
        });


    }


  private getConstrutora() {

    // Nome da construtora (Input)
    this.construtora.push({
        title: 'Nome da construtora',
        name: 'nome-da-construtora',
        type: 'text',
        col: 'col-12 col-md-6 col-xl-8',
        // required: true
    });

    // CNPJ (Input)
    this.construtora.push({
        title: 'CNPJ',
        name: 'construtora-cnpj',
        type: 'text',
        col: 'col-12 col-md-6 col-xl-4',
        // required: true
    });

    // Email (Input)
    this.construtora.push({
        title: 'Email',
        name: 'construtora-email',
        type: 'text',
        col: 'col-12 col-md-6 col-xl-6',
        // required: true
    });

    // Telefone (Input)
    this.construtora.push({
        title: 'Telefone',
        name: 'construtora-telefone',
        type: 'tel',
        col: 'col-12 col-md-6 col-xl-3',
        // required: true
    });
  }

    private getResponsavel() {
        let vl; vl = [];
        // Nome do Responsável (Input)
        vl.push({
            title: 'Nome do Responsável',
            name: 'responsavel[' + this.count + '][\'nome\']',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-8',
            // required: true
        });

        // CPF (Input)
        vl.push({
            title: 'CPF',
            name: 'responsavel[' + this.count + '][\'cpf\']',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-4',
            // required: true
        });

        // E-mail (Input)
        vl.push({
            title: 'E-mail',
            name: 'responsavel[' + this.count + '][\'email\']',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-4',
            // required: true
        });

        // Telefone (Input)
       vl.push({
            title: 'Telefone',
            name: 'responsavel[' + this.count + '][\'telefone\']',
            type: 'tel',
            col: 'col-12 col-md-6 col-xl-4',
            // required: true
        });

        // Cargo no condomínio (Input)
        vl.push({
            title: 'Cargo no condomínio',
            name: 'responsavel[' + this.count + '][\'cargo\']',
            type: 'text',
            col: 'col-12 col-md-6 col-xl-4',
            // required: true
        });

        return vl;
    }



    private getPreferencias() {

        // Input Descrição
        this.preferencias.push({
            title: 'Disponibilizar o imóvel para',
            name: 'disponibilizar-imovel',
            col: 'col-12 col-lg-7',
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
        this.preferencias.push({
            title: 'Exibir imóvel na internet',
            name: 'exibir-imovel',
            col: 'col-12 col-lg-6',
            // required: true,
            type: 'checkbox',
            checked: false,
            color: 'primary'
        });

        // Input Descrição
        this.preferencias.push({
            title: 'Anunciar condomínio ?',
            name: 'exibir-imovel',
            col: 'col-12 col-lg-6',
            type: 'checkbox',
            checked: false,
            color: 'primary'
        });

        // Input Descrição
        this.preferencias.push({
            title: 'Anexar documento de autorização',
            icon: 'insert_drive_file',
            name: 'upload-doc',
            col: 'col-12',
            required: true,
            type: 'upload-file',
            color: 'primary'
        });

    }

    criarBox() {
        this.count++;
        this.novato = this.getResponsavel();
        this.container.createEmbeddedView(this.template);
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
