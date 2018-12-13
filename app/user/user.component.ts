import { Component, OnInit } from '@angular/core';
/////////
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //////////
  constructor(private obj:HttpClient) { }

  ngOnInit() {
    this.userlist();

  }
  myuser:any[];
  userlist()
  {
    this.obj.get("http://localhost/angularphp1/src/assets/php1/userlist.php").subscribe(
      data =>{
        this.myuser =data as string[];
      }
    );
  }

}
