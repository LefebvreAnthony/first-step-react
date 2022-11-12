import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  console.log(date);
  const month = date.toLocaleString("fr-FR", { month: "long" });
  const day = date.toLocaleString("fr-FR", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div>
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
