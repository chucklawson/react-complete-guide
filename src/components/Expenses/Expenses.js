import React, {useState} from 'react';
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card"
import ExpenseFilter from "./ExpensesFilter"
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('ALL');   
  const filteredYearHandler = (filteredValue) => {    
    setFilteredYear(filteredValue)
  } 

  const filteredExpenses = props.items.filter(oneEntry => { 
    console.log('filteredYear: ' + filteredYear)
    if(filteredYear==='ALL')
    {
      return oneEntry;
    }
    else{
      return oneEntry.date.getFullYear().toString() === filteredYear
    }
  })

  return (
    <Card className="expenses">
      <ExpenseFilter value = {filteredYear} yearHandler = {filteredYearHandler}/>
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList expenseEntries= {filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
