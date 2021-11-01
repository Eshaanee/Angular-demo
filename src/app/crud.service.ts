import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
SERVER_URL: string="http://localhost:8080/api/";
books:any ={
  id:String,
  name: String,
  bookName:String,
  bookId:String
}
  constructor(private httpClient: HttpClient) {}
     getData(){
      return this.httpClient.get(this.SERVER_URL + 'books')
    }
     getDataById(id: number){
      return this.httpClient.get(`${this.SERVER_URL+ 'books'}${id}`);
    }
     addData(id:any,name:any,bookName:any,bookId:any){
       this.books.id=id;
       this.books.name=name;
       this.books.bookName=bookName;
       this.books.bookId=bookId;
       return this.httpClient.post(`${this.SERVER_URL + 'books'}`, this.books)
     }
}
