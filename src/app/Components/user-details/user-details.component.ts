import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  Id=0;
  user:any;  
  constructor(myActivate:ActivatedRoute,public myService:DemoService) {
    this.Id = myActivate.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.myService.GetUserById(this.Id).subscribe(
      {
        next:(data)=>{
          this.user= data;
        },
        error:(err)=>{console.log(err)}
      }
    );
  }

}
