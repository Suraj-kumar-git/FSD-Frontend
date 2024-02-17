import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { countReducer } from './reducers/counter.reducer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({count:countReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
