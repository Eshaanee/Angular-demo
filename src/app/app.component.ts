import { Component } from '@angular/core';
import {CrudService } from './crud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-inmemory-api';
  isClicked:boolean=false;
  message:String="";
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
    addData(){
      this.isClicked=true;
      // this.cataService.getData().subscribe((data: any)=>{
      //   console.log(data);
      //   this.books=data;
      // })
    }
     
    registerUser(event:any){
      const errors : string[] = [];
      event.preventDefault()
      console.log(event)
      const id=event.target.querySelector('#id').value
      const name=event.target.querySelector('#name').value
      const bookName=event.target.querySelector('#bookName').value
      const bookId=event.target.querySelector('#bookId').value
      
      this.cataService.addData(id,name,bookName,bookId).subscribe((data:any)=>{
        return this.message="Data Added";
      })
    }
       
  
  searchText:any;
  
   bookSearch=[
    {id: 1, name:'Esha',bookName:'Active', bookId:'1'},
    {id: 2, name:'Tom',bookName:'InActive', bookId:'2'},
    {id: 3, name:'Jill',bookName:'Active', bookId:'3'},
    {id: 4, name:'Jack',bookName:'InActive', bookId:'4'}
  ];
}
