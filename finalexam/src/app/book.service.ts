import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Book} from './Book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  apiURL = 'http://localhost:8081/books';


  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiURL);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(this.apiURL + id);
  }

  createBook(book: Book): Observable<any> {
    return this.http.post(this.apiURL, book);
  }
}

//   deleteCustomer(id: number): Observable<any> {
//     return this.http.delete(this.apiURL + id);
//   }
//
//   createCustomer(customer: Book): Observable<any> {
//     return this.http.post(this.apiURL, customer);
//   }
//
//   editCustomer(customer: Book): Observable<any> {
//     console.log(customer);
//     return this.http.put(this.apiURL + customer.id, customer);
//   }
// }

