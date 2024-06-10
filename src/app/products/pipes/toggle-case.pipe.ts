import { Pipe, PipeTransform } from '@angular/core';

// Ejemplos llamados
// william | toggleCase = 'WILLIAM'
// WILLIAM | toggleCase = 'william'

// Los Pipes personlizados requieren de darle un nombre.
// Para que Angular sepa de la existensia de este Pipe Personalizado (ToggleCasePipe) se deben declarar en un modulo.
@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  // Por ahora nos olvidamos de los argumentos.
  /* transform( value: string ): string {
    return value.toUpperCase();
  } */

  // Recibiendo argumentos.
  /* transform( value: string, ...args: any[] ): string {
    console.log( {args} );
    return value.toUpperCase();
  } */

  transform( value: string, toUpper: boolean = false ): string {
    //console.log( {value, toUpper} );

    return ( toUpper )
      ? value.toUpperCase()
      : value.toLowerCase();

  }

}
