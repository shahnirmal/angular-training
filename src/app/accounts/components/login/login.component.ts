import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string = '';
  public password: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log(`login called. userName : ${this.userName} pass ${this.password}`);
  }

}
