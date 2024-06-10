import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order-page',
  templateUrl: './order-page.component.html',
  styleUrl: './order-page.component.css'
})
export class OrderPageComponent {

  // Definimos un metodo para hacer el cambio dinamico de toggleCase.
  public isUpperCase: boolean = false;

  // Creamos una propiedad para hacer dinamicamente el ordenamiento de acuerdo al botón que seleccione.
  //public orderBy?: keyof Hero = 'name'; // Tambien se puede definir así pero con un valor por defecto.
  public orderBy: keyof Hero | undefined | '' = '';

  // Creamos una propiedad para nuestro heroes.
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    }
  ]

  // Este metodo me cambia si es verdadero lo pasa a falso y viceversa.
  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  // Se crea un metodo para realizar el cambio de orderBy
  changeOrder( value: keyof Hero ): void {
    this.orderBy = value;
  }
}
