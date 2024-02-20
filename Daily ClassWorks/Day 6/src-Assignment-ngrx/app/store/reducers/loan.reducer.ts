import { LoanApplication } from "src/app/models/LoanApplication";
import { applyLoan, deleteLoan } from "../actions/loan.action";
import { createReducer, on } from "@ngrx/store";

export interface LoanState{
  loans:LoanApplication[];
}

export const initialState:LoanState={
  loans:[
    {
      id:'12',
      principal:12345,
      rate:15,
      duration:36
    }
  ]
}

export const LoanReducer=createReducer(
  initialState,
  on(applyLoan,(state,{loan})=>
    ({
      ...state,
      loans:[...state.loans,loan]
    })
  ),
  on(deleteLoan,(state,{id})=>
    ({
      ...state,
      loans:state.loans.filter((loan)=>{loan.id!==id})
    })
  )
);