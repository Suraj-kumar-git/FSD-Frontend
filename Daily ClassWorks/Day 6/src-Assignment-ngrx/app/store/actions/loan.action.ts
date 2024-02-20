import { createAction, props } from "@ngrx/store";
import { LoanapplicationComponent } from "src/app/loanapplication/loanapplication.component";
import { LoanApplication } from "src/app/models/LoanApplication";

export const applyLoan=createAction('[Apply Loan] Apply Loan',props<{loan:LoanApplication}>());

export const deleteLoan =createAction('[Delete] Delete',props<{id:string}>());

export const updateLoan =createAction('[Update Loan] Update',props<{loan:LoanApplication}>());

export const getAllLoans =createAction('[View All Loans] Get All');