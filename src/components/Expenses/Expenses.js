import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card"
import ExpenseFilter from "./ExpensesFilter"
import "./Expenses.css";


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState(2021);
   
  const filteredYearHandler = (fileterValue) => {
    setFilteredYear(fileterValue)
    console.log('filteredYearHandler: ' + fileterValue)
  }

  return (
    <Card className="expenses">
      <ExpenseFilter value = {filteredYear } yearHandler = {filteredYearHandler}/>
      {props.items.map((item) => (
        <ExpenseItem  title={item.title} amount={item.amount} date={item.date} key={item.title} />
      ))}
    </Card>
  );
}

export default Expenses;
