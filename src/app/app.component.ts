import { Component } from '@angular/core';
import { MortgageCalculatorComponent } from './mortgage-calculator/mortgage-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MortgageCalculatorComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
