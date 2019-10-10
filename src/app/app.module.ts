import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimestampComponent } from './timestamp/timestamp.component';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JsonformatComponent } from './jsonformat/jsonformat.component';
import { ParamverifyComponent } from './paramverify/paramverify.component'; 
@NgModule({
  declarations: [
    AppComponent,
    TimestampComponent,
    JsonformatComponent,
    ParamverifyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
