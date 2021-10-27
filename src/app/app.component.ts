import { Component } from '@angular/core';
import {CrudService } from './crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-inmemory-api';
  books:any=[];
  constructor(private cataService: CrudService){
    // this.cataService.getData().subscribe((data: any)=>{
    //   console.log(data);
    //   this.books=data
    }
    getData(){
      this.cataService.getData().subscribe((data: any)=>{
        console.log(data);
        this.books=data;
      })
    }
  
  
  searchText: any;
  
   bookSearch=[
    {id: 1, name:'Esha',bookName:'Active', bookId:'1'},
    {id: 2, name:'Tom',bookName:'InActive', bookId:'2'},
    {id: 3, name:'Jill',bookName:'Active', bookId:'3'},
    {id: 4, name:'Jack',bookName:'InActive', bookId:'4'}
  ];
}
