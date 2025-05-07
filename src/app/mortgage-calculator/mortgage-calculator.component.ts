import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mortgage-calculator',
  standalone: true, // ✅ REQUIRED for modern Angular setup
  imports: [CommonModule, FormsModule], // ✅ Needed for ngModel and pipes
  templateUrl: './mortgage-calculator.component.html',
  styleUrls: ['./mortgage-calculator.component.css']
})
export class MortgageCalculatorComponent {
  purchasePrice: number = 450000;
  downPayment: number = 135000;
  repaymentYears: number = 25;
  interestRate: number = 3;

  get loanAmount(): number {
    return this.purchasePrice - this.downPayment;
  }

  get monthlyPayment(): number {
    const principal = this.loanAmount;
    const monthlyInterest = this.interestRate / 100 / 12;
    const numberOfPayments = this.repaymentYears * 12;

    if (monthlyInterest === 0) {
      return principal / numberOfPayments;
    }

    return (
      principal *
      monthlyInterest /
      (1 - Math.pow(1 + monthlyInterest, -numberOfPayments))
    );
  }
}
