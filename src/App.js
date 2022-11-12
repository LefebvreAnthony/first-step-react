import Expenses from "./components/Expenses";

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
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
