import { Component, OnInit } from '@angular/core';
import { bmiItemModel } from '../../models/bmiItem.model';

@Component({
  selector: 'app-bmi-calculation-history',
  templateUrl: './bmi-calculation-history.component.html',
  styleUrls: ['./bmi-calculation-history.component.css']
})
export class BmiCalculationHistoryComponent implements OnInit {

  public bmiHistoryArray : Array<bmiItemModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
