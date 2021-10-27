import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService  implements InMemoryDbService{
   books:any=[];
  constructor() { }
  createDb(){

    let books=[
      {id: 1, name:'Esha',bookName:'Active', bookId:'1'},
      {id: 2, name:'Tom',bookName:'InActive', bookId:'2'},
      {id: 3, name:'Jill',bookName:'Active', bookId:'3'},
      {id: 4, name:'Jack',bookName:'InActive', bookId:'4'}
    ];
    return {books};
  }
}
