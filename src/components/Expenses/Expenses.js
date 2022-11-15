import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

  const filteredExpenses = expenses.filter(filterYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterChange={FilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
