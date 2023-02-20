import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})  
export class DemoService {

  constructor(private myCLient:HttpClient) {} 
  //* contain all methods (get, post, delete, put)

  private Base_URL = "http://localhost:3000/users";

  GEtAllUsers() {
    return this.myCLient.get(this.Base_URL);
  }

  GetUserById(id:any) {
    return this.myCLient.get(this.Base_URL+"/"+id);
  }

  AddUser(user:any){
    return this.myCLient.post(this.Base_URL, user); 
  }

  UpdateUser(id:any, UpdateUser:any){
    return this.myCLient.put(this.Base_URL+"/"+id, UpdateUser); 
  }

  DeleteUser(id:any){
    return this.myCLient.delete(this.Base_URL+"/"+id); 
  }

}
