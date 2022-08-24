import { Component, Inject, OnInit } from '@angular/core';
import { IloggerService } from 'src/app/IloggerService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string = '';
  public password: string = '';
  private logger: IloggerService;
  
  constructor(@Inject('IloggerSvc') private loggerService: IloggerService) { 

    this.logger = loggerService;
  }

  ngOnInit(): void {
  }

  login() {
    this.logger.log(`login called. userName : ${this.userName} pass ${this.password}`);
  }

}
