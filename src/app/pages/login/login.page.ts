import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})

export class LoginPageComponent {

  constructor(public snackBar: MatSnackBar) { this.loginInputs(); }

  // Cria os Inputs do formulário
  inputs: any = [];
  private loginInputs() {

    // Input Email
    this.inputs.push({
      type: 'email',
      name: 'email',
      placeholder: 'E-mail',
      value: 'email@dyogophoenix.com.br'
    });

    // Input Password
    this.inputs.push({
      type: 'password',
      name: 'pswd',
      placeholder: 'Senha',
      value: 'dfsefefse'
    });
  }


  // Função para verificar o Login
  checkLogin( ev, el ) {
    let data;
    ev.preventDefault();

    // Captura as informações de login
    data = this.Serialize(el);
    console.log(data);

    this.openSnackBar({
      text:  'Os dados informados estão incorretos !', // Mensagem do snackbar
      // button: 'Fechar', // Mensagem no botão de fechar
      status: false, // or false (Status do login)
      duration: 4000, // Tempo pra fechar
      position: [
        'end', // 'start' | 'center' | 'end' | 'left' | 'right'
        'bottom' // 'top' | 'bottom'
      ]
    });

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

  // Função para invocar o Snackbar
  private openSnackBar( data: any ) {
    data = data ? data : {};

    data.text = data.text ? data.text : 'Sem mensagem';
    this.snackBar.open(data.text, data.button, {
      panelClass: 'login-' + (data.status ? 'success' : 'error'),
      duration: data.duration ? data.duration : null,
      horizontalPosition: data.position[0] ? data.position[0] : null,
      verticalPosition: data.position[1] ? data.position[1] : null,
    });
  }

}
