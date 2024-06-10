import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'William';
  public gender: 'male'|'female' = 'male';

  // Creamos una variable map para saber que se muestra en la palabra de invitarlo o invitarla dependiendo de si es male o female.
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void {
    this.name = 'Maryory';
    this.gender = 'female';
  }

  //i18nPrural
  public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperandono.',
    '=1': 'tenemos un cliente esperandono.',
    '=2': 'tenemos 2 personas esperandono.',
    'other': 'tenemos # clientes esperandono.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'William',
    age: 53,
    address: 'Bogotá, Colombia'
  }

  // Async Pipe: Funcion para promesas o obseervables.
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap( value => console.log('tap:', value) )
    );

  // Ahora se define el uso pero con Promesas, solo que las promesas no se pueden cancelar.
  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      console.log( 'Tenemos data en la promesa.' );
    }, 3500)
  });

}
