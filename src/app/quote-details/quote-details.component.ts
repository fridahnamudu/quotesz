import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import  { Quotesz } from './../quotesz'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

@Input() quote: Quotesz;
  @Output() isDelete = new EventEmitter <boolean>();

  quotes = [
    new Quotesz ('Nelson', 'The greatest glory in living lies not in never falling,but in rising every time we fall.', 'k', 7 , 9, ),
    new Quotesz ('John Lennon', 'Life is what happens when you are busy making other plans', 'joel', 8 , 9)
  ];
  quoteDelete(complete: boolean) {
    this.isDelete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
