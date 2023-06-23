import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ComponentesModule } from './components/component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldDefaultOptions, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
//import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { FlatpickrModule } from 'angularx-flatpickr';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { SafePipeModule } from 'safe-pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

const appearance: MatFormFieldDefaultOptions = {
  appearance: 'outline'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule, 
    BrowserModule, MatSnackBarModule,
    RouterModule.forRoot([]),
    ComponentesModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatDialogModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
