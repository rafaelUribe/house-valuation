import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './primeng/primeng.module';
import { MessageService, SharedModule } from 'primeng/api';
import { MenuComponent } from './shared/menu/menu.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RentalCalculatorComponent } from './components/rental-calculator/rental-calculator.component';
import { ValueCalculatorComponent } from './components/value-calculator/value-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainPageComponent,
    RentalCalculatorComponent,
    ValueCalculatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule,
    HttpClientModule,
    SharedModule,
    NgxCurrencyModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
