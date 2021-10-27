import {DataService} from "./data.service";
 describe('DataService', ()=>{
   let service: DataService

   beforeEach(()=>{

   })

   it('should be zero books at start', ()=>{
     expect(service.books.length).toBe(0);
   });

   it('should be 4 books when createDb is called', ()=>{
     service.createDb;
     expect(service.books.length).toBe(4);
   })
 })