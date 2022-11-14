import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setfilteredYear] = useState("2020");

  const FilterHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
    console.log("This is in Expense.js");
    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={FilterHandler}
        />
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amout}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
