import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-message',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent {
  @Input() data: any;
}
