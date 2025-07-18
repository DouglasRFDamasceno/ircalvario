import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Home', url: '/folder/outbox', icon: 'home' },
  ];
  constructor() { }

  logout() {
  // Exemplo simples — adapte ao seu sistema de autenticação
  console.log('Usuário deslogado');
  // redirecione, limpe tokens, etc
}
}
