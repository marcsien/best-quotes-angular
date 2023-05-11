import { Component } from '@angular/core';
import { Quotation } from './models/quotiation';
import { QUOTES } from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showForm = false;
  quotes: Quotation[] = QUOTES;

  onSwitchForm(): void{
    this.showForm = !this.showForm;
  }
}
