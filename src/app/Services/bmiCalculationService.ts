import { Inject, Injectable } from "@angular/core";
import { IloggerService } from "../IloggerService";

@Injectable()
export class bmiCalculationService {

    private logger: IloggerService;
    
    constructor(@Inject('IloggerSvc') private loggerService: IloggerService) {
        this.logger = loggerService;
    }

    public calculate(weight: number, height: number) {
        let result = weight * height;
        this.logger.log(`calculate called. result is ${result}`);
        return result;
    }
}