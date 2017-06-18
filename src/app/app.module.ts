import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      // Register the modules
      BrowserAnimationsModule,
        JsonpModule,      
      DropDownsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
