import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public userName: string = '';
  public password: string = '';
  public email: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  signUp(form: FormGroup) {
    console.log(form);
  }
  clearData(form: FormGroup) {
    form.reset();
  }
}
