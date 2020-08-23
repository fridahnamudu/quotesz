import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotesz } from './../quotesz'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newQuote = new Quotesz ( '',  '', '', 9, 0);
  @Output() saveQuote = new EventEmitter<Quotesz>();

  addQuote() {
     this.saveQuote.emit(this.newQuote);
   }
  constructor() { }
 

  ngOnInit(): void {
  }

}
