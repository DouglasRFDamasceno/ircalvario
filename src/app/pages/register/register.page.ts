import { Component, OnInit } from '@angular/core';
import { IonHeader, IonTitle } from "@ionic/angular/standalone";

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mostrarCalendario = false;
  dataNascimento: string = '';
  dataNascimentoFormatada: string = '00/00/0000';

  abrirCalendario() {
    this.mostrarCalendario = true;
  }

  fecharCalendario() {
    this.mostrarCalendario = false;
  }

  atualizarData(event: any) {
    this.dataNascimento = event.detail.value;
    const data = new Date(this.dataNascimento);
    this.dataNascimentoFormatada = data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    this.fecharCalendario();
}

}
