import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/////////////////
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    ////////////
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
