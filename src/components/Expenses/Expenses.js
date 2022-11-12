import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
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
    </Card>
  );
};

export default Expenses;
