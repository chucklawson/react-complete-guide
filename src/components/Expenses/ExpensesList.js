import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if(props.expenseEntries.length===0)
    {
        return (<h2 className='expenses-list__fallback'> No expenses located. </h2>)
    }
  
      return ( <ul className = 'expenses-list'>
       {props.expenseEntries.map( (expense)=> ( 
      <ExpenseItem  title={expense.title} amount={expense.amount} date={expense.date} key={expense.id} />
        ))}
        </ul>
      )
  }
  
  export default ExpensesList;
  