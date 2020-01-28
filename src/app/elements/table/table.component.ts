import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-use-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class UsuariosTableComponent {

    @Input() data: any;

    constructor() {}

    userDel(id) {
        // Função para quando clicar na lixeira da Ações
        console.log( 'Deletando id: ' + id );
    }

    userEdit(id) {
        // Função para quando clicar no lápis da Ações
        console.log( 'Editando id: ' + id );
    }

}
