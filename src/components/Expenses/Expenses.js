import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [filteredYear, setfilteredYear] = useState("All");

  const FilterHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  const filterYear = (year) => {
    if (filteredYear === "All") return true;
    if (year.date.getFullYear().toString() === filteredYear) {
      return true;
    }
    return false;
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={FilterHandler}
        />
        {expenses.filter(filterYear).map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
