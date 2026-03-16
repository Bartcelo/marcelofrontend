import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Resumo } from './components/resumo/resumo';
import { Servicos } from './components/servicos/servicos';
import { Skills } from './components/skills/skills';
import { Contato } from './components/contato/contato';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, About, Resumo, Servicos, Skills, Contato, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  protected readonly title = signal('marceloAngular');


 
}
