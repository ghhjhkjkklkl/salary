import { Component } from "react";
import "./employeeItem.scss";

class EmployeeItem extends Component {
  state = {
    salary: this.props.salary,
  };

  onChangeInput = ({ target: { value } }) => {
    const salary = parseFloat(value) || 0;

    this.setState({
      salary,
    });
    this.props.onChangeSalary(salary, this.props.id);
  };

  render() {
    const { salary } = this.state;
    const { name, increase, onDelete, onToggleIncrease } = this.props;
    return (
      <li className={`item ${increase ? "increase" : ""}`}>
        <p className="item__name">{name}</p>
        <input
          className="item__input"
          onChange={this.onChangeInput}
          value={salary + "$"}
        />
        <div className="item__group">
          <button className="item__button" onClick={onToggleIncrease}>
            {increase ? "Pick up bonus" : "Give a bonus"}
          </button>
          <button onClick={onDelete} className="item__button">
            Delete an employee
          </button>
        </div>
      </li>
    );
  }
}

export default EmployeeItem;
