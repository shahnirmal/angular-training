import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IloggerService } from 'src/app/IloggerService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public userName: string = '';
  public password: string = '';
  public email: string = '';
  private logger: IloggerService;

  constructor(@Inject('IloggerSvc') private loggerService: IloggerService) {
    this.logger=loggerService;
   }

  ngOnInit(): void {
  }

  signUp(form: FormGroup) {
    this.logger.log(form);
  }

  clearData(form: FormGroup) {
    form.reset();
  }
}
