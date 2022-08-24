import { Token } from '@angular/compiler';
import { Inject, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountsModule } from './accounts/accounts.module';

import { AppComponent } from './app.component';
import { IloggerService } from './IloggerService';
import { OutputComponent } from './output/output.component';
import { apiLoggerService } from './Services/apiLoggerService';
import { bmiCalculationService } from './Services/bmiCalculationService';
import { consoleLoggerService } from './Services/consoleLoggerService';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    WidgetsModule,
    AccountsModule
  ],
  providers: [
    { provide: 'IloggerSvc', useClass: consoleLoggerService },
    { provide: bmiCalculationService, useClass: bmiCalculationService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
