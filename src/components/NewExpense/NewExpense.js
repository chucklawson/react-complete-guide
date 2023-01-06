import React from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{

  const saveExpenseDataHandler = (newExpenses) =>{
    const expenseData = {
     ...newExpenses,
     id: Math.random().toString()
    }
    props.onNewExpense(expenseData)    
  }
 
    return (
        <div className='new-expense'>
        <ExpenseForm onSaveexpenseData = {saveExpenseDataHandler} />
        </div>
      );
};

export default NewExpense;