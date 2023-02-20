import { Component } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styles: [
  ]
})
export class AddNewUserComponent {

  constructor(public myService:DemoService) {
    
  }

  Add(username:any, email:any, age:any){
    let newUser = {username, email, age};
    this.myService.AddUser(newUser).subscribe(); 
  }
}
