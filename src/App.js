import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Junkbox",
    amount: 394.67,
    date: new Date(2020, 11, 18),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 78.47,
    date: new Date(2019, 11, 1),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 3, 12),
  },
  {
    id: "e4",
    title: "New Desk",
    amount: 794.67,
    date: new Date(2021, 2, 22),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
