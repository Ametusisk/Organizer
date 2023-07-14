import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { SelectorComponent } from './components/selector/selector.component';
import { OrganizerComponent } from './components/organizer/organizer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MomentPipe,
    SelectorComponent,
    OrganizerComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
