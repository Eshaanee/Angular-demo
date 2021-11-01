import { componentFactoryName } from "@angular/compiler";
import{AppComponent} from "./app.component";
import {CrudService } from './crud.service';
describe('app-component',()=>{
  let comp:AppComponent;
  beforeEach(()=>{
   
  })
  it('title should be tested', ()=>{
    let title="angular-inmemory-api";
    expect(title).toBe("angular-inmemory-api");
  });

  it('#isClicked should be false after #addData',()=>{
      expect(comp.isClicked).toBeFalse;
      
  });
  
  it('#isClicked should be true after #addData',()=>{
      comp.addData();
      expect(comp.isClicked).toBeTrue;
  });

  it('message should be empty before calling register user',()=>{
      expect(comp.message).toBe("");
  });

  it('message should be Data Added after calling register user', ()=>{
    comp.registerUser;
    expect(comp.message).toBe("Data Added");
  })
})
