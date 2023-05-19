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
  quotation: Quotation = {author: '', quotation: '', votes: 0};

  onSwitchForm(): void{
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = {author: '', quotation: '', votes: 0};
  }

  addVote(quotation: Quotation, value: number){
    quotation.votes += value;
  }

  bestQuotes(){
    return this.quotes.filter(q => q.votes > 0)
  }

  worstQuotes(){
    return this.quotes.filter(q => q.votes < 0)
  }
}
