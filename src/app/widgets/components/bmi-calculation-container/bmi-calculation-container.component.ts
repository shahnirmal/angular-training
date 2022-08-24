import { Component, OnInit, ViewChild } from '@angular/core';
import { bmiCalculationService } from 'src/app/Services/bmiCalculationService';
import { bmiItemModel } from '../../models/bmiItem.model';
import { BmiCalculationHistoryComponent } from '../bmi-calculation-history/bmi-calculation-history.component';

@Component({
  selector: 'app-bmi-calculation-container',
  templateUrl: './bmi-calculation-container.component.html',
  styleUrls: ['./bmi-calculation-container.component.css']
})
export class BmiCalculationContainerComponent implements OnInit {

  @ViewChild('bmiHistory') bmiHistory : BmiCalculationHistoryComponent = new BmiCalculationHistoryComponent();
  constructor(private bmiCalculationSvc : bmiCalculationService) { }

  ngOnInit(): void {
  }

  onBmiresultCalculated(data: bmiItemModel) {
    data.result = this.bmiCalculationSvc.calculate(data.weight,data.height);
    this.bmiHistory.bmiHistoryArray.push(data);
  }
}
