import { Component, EventEmitter, Output } from "@angular/core";
import { bmiItemModel } from "../../models/bmiItem.model";

@Component({
    selector: 'bmi-calculator',
    templateUrl: './bmi-calculator.component.html',
    styleUrls: ['./bmi-calculator.component.css'],
})

export class bmiCalculatorComponent {
    public height = 0;
    public weight = 0;
    public bmi = 0;

    @Output() resultCalculated = new EventEmitter<bmiItemModel>();
    // setweight(value:any)
    // {
    //     this.weight = value;
    // }

    // setheight(value:any)
    // {
    //     this.height = value;
    // }

    public calculateBMI() {
        // this.bmi = this.weight / (this.height * this.height);
        this.resultCalculated.emit(
            new bmiItemModel(this.height, this.weight,this.bmi)
          );
    }
}