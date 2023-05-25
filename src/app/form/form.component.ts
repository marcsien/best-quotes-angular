import { Component, OnInit, Output } from '@angular/core';
import { Quotation } from '../models/quotiation';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  @Output() newQuotation = new EventEmitter<Quotation>();

  showForm = true;
  quotation: Quotation = {author: '', quotation: '', votes: 0};
  
  onSwitchForm(): void{
    this.showForm = !this.showForm;
  }

  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = {author: '', quotation: '', votes: 0};
  }

}
