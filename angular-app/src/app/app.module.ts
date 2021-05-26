import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from "@angular/common/http";
//import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
//import { InMemoryDataService } from "./in-memory-data.service";

import { AppComponent } from './app.component';
import { PithyComponent } from './pithy/pithy.component';
import { PithyDetailComponent } from './pithy-detail/pithy-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    PithyComponent,
    PithyDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    //dummy API server
    //HttpClientInMemoryWebApiModule.forRoot(
    //  InMemoryDataService, {dataEncapsulation: false}
    //)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
