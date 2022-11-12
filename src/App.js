import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Junkbox",
      amout: 394.67,
      date: new Date(2022, 11, 18),
    },
    {
      id: "e2",
      title: "Toilet Paper",
      amout: 78.47,
      date: new Date(2022, 11, 1),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amout: 294.67,
      date: new Date(2022, 12, 12),
    },
    {
      id: "e4",
      title: "New Desk",
      amout: 794.67,
      date: new Date(2021, 2, 22),
    },
  ];
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amout}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amout}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amout}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amout}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
