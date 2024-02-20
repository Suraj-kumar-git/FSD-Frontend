import { Component } from '@angular/core';
import { LoanApplication } from '../models/LoanApplication';
import { Store } from '@ngrx/store';
import { applyLoan, deleteLoan, updateLoan } from '../store/actions/loan.action';

@Component({
  selector: 'app-loanapplication',
  templateUrl: './loanapplication.component.html',
  styleUrls: ['./loanapplication.component.css']
})
export class LoanapplicationComponent {
  principal!:number;
  rate!:number;
  duration!:number;

  applications!: LoanApplication[];

  constructor(private store: Store<{applications:{applications:LoanApplication[]}}>){
    store.select('applications').subscribe((loansState: { applications: LoanApplication[] }) => {
      this.applications = loansState.applications;
      console.log(this.applications);
    });
  }
  applyLoanApplication(inputLoan:LoanApplication){
     const loan: LoanApplication = {

      // id: Date.now().toString(),
      // principal: this.principal,
      // rate: this.rate,
      // duration:this.duration

      id: Date.now().toString(),
      principal: inputLoan.principal,
      rate: inputLoan.rate,
      duration:inputLoan.duration
     }

     alert(loan.id);
     this.store.dispatch(applyLoan({loan}));
    //  this.principal =0;
    //  this.rate = 0;
    //  this.duration=0;
  }

  // updateLoan(inputLoan:LoanApplication){

  //   const updatedLoan Loan={
  //     principal=inputLoan.principal,


  //   }

  //     this.store.dispatch(updateLoan({updatedLoan}));
  // }
  
  deleteLoan(id:string){
      this.store.dispatch(deleteLoan({id}));
  }
}
