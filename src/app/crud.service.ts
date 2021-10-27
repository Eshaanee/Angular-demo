import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
SERVER_URL: string="http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) {}
     getData(){
      return this.httpClient.get(this.SERVER_URL + 'books')
    }
     getDataById(id: number){
      return this.httpClient.get(`${this.SERVER_URL+ 'books'}${id}`);
    }
  
}
