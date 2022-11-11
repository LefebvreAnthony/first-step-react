import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 11, 11);
  const ExpenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{ExpenseTitle}</div>
      <div className="expense-item__description">
        <h2>{expenseDate.toISOString()}</h2>
        <div className="expense-item__price">{"$ " + expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
