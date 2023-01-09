import React, {useState} from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) =>{

  const [addAnExpense,setAddAnExpense]= useState(false);

  const saveExpenseDataHandler = (newExpenses) =>{
    const expenseData = {
     ...newExpenses,
     id: Math.random().toString()
    }
    props.onNewExpense(expenseData) 
    setAddAnExpense(false);  
  }

  const cancelAddExpenseHandler = () =>
  {
    setAddAnExpense(false);
  }

  const onAddAnExpenseHandler = () =>
  {
    setAddAnExpense(true);    
  }
 
    return (
        <div className='new-expense'>
        {!addAnExpense && <button  onClick={onAddAnExpenseHandler}>Add An Expense</button>}
        {addAnExpense && <ExpenseForm onSavexpenseData = {saveExpenseDataHandler} onCancelAddHandler={cancelAddExpenseHandler}/>}
        </div>
      );
};

export default NewExpense;