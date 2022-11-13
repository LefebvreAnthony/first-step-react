import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amout}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
