import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'william';
  public nameUpper: string = 'WILLIAM';
  public fullName: string = 'wiLliAm VeLanDia';

  public customDate: Date = new Date();

}
