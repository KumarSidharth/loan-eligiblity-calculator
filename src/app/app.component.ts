import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'loan-eligiblity-calculator';

  income = 150000;
  expense = 50000;
  month = 6;
  hasExistingLoans = false;
  existingLoanEMI = 0;
  currency = '₹';
  months = new Array(34)
            .fill(0)
            .map( (e, i) => i+3);

  loanAmount = 0;
  emi = 0;

  ngOnInit() {
    this.calculate();
  }

  calculate() {
    if(!this.hasExistingLoans) {
      this.loanAmount = Math.max(0, Math.floor(((this.income - this.expense) * 0.8) * 0.2 * this.month));
    } else {
      this.loanAmount = Math.max(0, Math.floor(((this.income - this.expense - this.existingLoanEMI) * 0.8) * 0.2 * this.month));
    }
    this.emi = Math.max(0, Math.floor((this.loanAmount / this.month) * 0.3));
  }
}
