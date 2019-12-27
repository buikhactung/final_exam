import { Component, OnInit } from '@angular/core';
import {Book} from '../Book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent implements OnInit {
  filterStatus = 'XEM_TAT_CA'
  newBook = '';
  listBook: Book[];
  constructor(private bookService: BookService) {
    this.bookService.getBooks().subscribe(next => (this.listBook = next), error => (this.listBook = []));
  }

  ngOnInit() {
  }

  onSubmit() {

  }

  addBook() {
    this.listBook.unshift({
      id: this.listBook.length + 1,
      name: this.newBook,
      read: false
    });
    this.newBook = '';
  }
}
