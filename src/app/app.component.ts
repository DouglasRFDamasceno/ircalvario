import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home', color: 'primary' },
    { title: 'Estrutura', url: '/estrutura', icon: 'business', color: 'tertiary' },
    { title: 'Dízimo e oferta', url: '/dizimo-oferta', icon: 'qr-code', color: 'black' },
    { title: 'Agenda', url: '/agenda', icon: 'calendar', color: 'warning' },
    { title: 'Contato', url: '/contato', icon: 'call', color: 'success' },
    { title: 'Login', url: '/login', icon: 'log-in', color: 'danger' },
  ];
  constructor() { }

  // logout() {
  //   // Exemplo simples — adapte ao seu sistema de autenticação
  //   console.log('Usuário deslogado');
  //   // redirecione, limpe tokens, etc
  // }
}
