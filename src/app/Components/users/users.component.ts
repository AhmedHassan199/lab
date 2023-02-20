import { Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  constructor(public myService:DemoService){}

  users:any;
  ngOnInit(): void { //! fetch API

    this.myService.GEtAllUsers().subscribe(
      {
        next:(data)=>{
          this.users = data;
        },
        error:(err)=>{}
      }
      )


  }

}
