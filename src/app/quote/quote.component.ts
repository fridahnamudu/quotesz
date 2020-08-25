import { Component, OnInit } from '@angular/core';
import { Quotesz } from './../quotesz';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quotesz('Isaac', 'Whoever is happy will make others happy too.', 'Tenina', 9 , 0),
    new Quotesz('John', 'Life is either a daring adventure or nothing at all.', 'Mark', 8 , 9)
  ];



 deleteQuote(isDelete, index) {
   if (isDelete) {
  const toDelete = confirm(`Are you sure you want to delete? ${this.quotes[index].quote}`);
  }
  if (isDelete) {
      this.quotes.splice(index, 1);
    }
  }
  addQuote(quote: Quotesz) {
    const quoteLength = this.quotes.length;
    quote.timeCreated = quoteLength + 1;
    this.quotes.push(quote);
  }
  upVote(i) {
    this.quotes[i].upVotes += 1;

  }

  downVote(i) {
this.quotes[i].downVotes -= 1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
