import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { KeypadComponentComponent } from './keypad-component/keypad-component.component';
import { DisplayComponentComponent } from './display-component/display-component.component';
import { CalculateServiceService } from './calculate-service.service';

@NgModule({
  declarations: [
    AppComponent,
    KeypadComponentComponent,
    DisplayComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
