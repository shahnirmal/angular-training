import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { appBanner } from "./components/appBanner/app-banner.component";
import { appFooter } from "./components/appFooter/app-footer.component";
import { bmiCalculatorComponent } from "./components/bmiCalculator/bmi-calculator.component";
import { timerComponent } from "./components/timer/timer.component";
import { BmiCalculationContainerComponent } from './components/bmi-calculation-container/bmi-calculation-container.component';
import { BmiCalculationHistoryComponent } from './components/bmi-calculation-history/bmi-calculation-history.component';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        appBanner,
        appFooter,
        timerComponent,
        bmiCalculatorComponent,
        BmiCalculationContainerComponent,
        BmiCalculationHistoryComponent
    ],
    exports: [ 
        appBanner,
        appFooter,
        timerComponent,
        BmiCalculationContainerComponent
    ],
    imports:[
        FormsModule,
        CommonModule
    ]
})

export class WidgetsModule {

}