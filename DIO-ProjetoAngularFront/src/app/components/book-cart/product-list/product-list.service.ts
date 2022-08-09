import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Book} from "./model/books.model";
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';


export const books: Book[] = [
    { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
    { id: '2', name: 'Algoritimos Funcionais' , price: 10, quantity: 2, category: "Programacao", img:"img2"},
    { id: '3', name: 'Arsene Lupin' , price: 10, quantity: 3, category: "Acao", img:"img3"},
    { id: '4', name: 'Introducao ao Java' , price: 20, quantity: 4, category: "Programacao", img:"img4"},
    { id: '5', name: 'Codigo Limpo' , price: 30, quantity: 4, category: "Programacao", img:"img5"},

  ];

@Injectable()


export class BooksService {

  private url = 'https://localhost:44382/api/bookstore';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
    
   constructor( private http: HttpClient){}


    // getBooks(){
    //     return books;
    // }

    getBooks() {
      return this.http.get(this.url)

  
    }

}
