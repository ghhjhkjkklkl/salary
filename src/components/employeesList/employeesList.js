import EmployeeItem from "../employeeItem/employeeItem";
import "./employeeList.scss";

function EmployeesList({ data, onDelete, onToggleIncrease, onChangeSalary }) {
  const items = data.map((item) => (
    <EmployeeItem
      {...item}
      key={item.id}
      onDelete={() => onDelete(item.id)}
      onToggleIncrease={() => onToggleIncrease(item.id)}
      onChangeSalary={onChangeSalary}
    />
  ));
  return <ul className="items-list">{items}</ul>;
}

export default EmployeesList;
