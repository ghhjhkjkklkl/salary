import "./header.scss";

function Header({ totalQuantity, totalSalary, promotedEmployees }) {
  return (
    <header className="header">
      <h1>Учет сотрудников и зарплат</h1>
      <p>Общее число сотрудников: {totalQuantity}</p>
      <p>Общая зарплата всех сотрудников: {`${totalSalary}$`}</p>
      <p>Премию получает: {promotedEmployees}</p>
    </header>
  );
}

export default Header;
