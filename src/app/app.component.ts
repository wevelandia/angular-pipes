import { Component } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // public title = 'wiLLiam veLandIa';
  // Adicionamos estas lineas para una animación de Ripple refresh de PrimeNG.
  constructor( private primengConfig: PrimeNGConfig ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
