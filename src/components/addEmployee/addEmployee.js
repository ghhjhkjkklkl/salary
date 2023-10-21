import { Component } from "react";
import "./addEmployee.scss";

class AddEmployee extends Component {
  state = {
    name: "",
    salary: "",
    nameError: "",
    salaryError: "",
  };

  onValueChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value,
      [`${name}Error`]: "",
    });
  };

  validateFields = () => {
    const { name, salary } = this.state;
    let error = 0;

    if (name.length < 3) {
      this.setState({
        nameError: "Введите минимум 3 символа",
      });
      error++;
    }

    if (!name) {
      this.setState({
        nameError: "Имя сотрудника не должно быть пустым",
      });
      error++;
    }

    if (!salary) {
      this.setState({
        salaryError: "Зарплата должна быть заполнена",
      });
      error++;
    }

    return error;
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const { name, salary } = this.state;
    this.validateFields();

    if (this.validateFields() > 0) {
      return;
    }

    this.props.onAddEmployee(name, salary);
    this.setState({
      name: "",
      salary: "",
    });
  };

  render() {
    const { name, salary, nameError, salaryError } = this.state;
    const nameErrorTemplate = nameError ? (
      <p className="form__error-message">{nameError}</p>
    ) : null;
    const salaryErrorTemplate = salaryError ? (
      <p className="form__error-message">{salaryError}</p>
    ) : null;
    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <h2>Добавить нового сотрудника</h2>
        <div className="form__wrapper">
          <div>
            <input
              name="name"
              type="text"
              className={nameError ? "form__error-input" : ""}
              placeholder="Имя сотрудника"
              onChange={this.onValueChange}
              value={name}
            />
            {nameErrorTemplate}
          </div>

          <div>
            <input
              name="salary"
              type="number"
              className={salaryError ? "form__error-input" : ""}
              placeholder="Зарплата сотрудника($)"
              onChange={this.onValueChange}
              value={salary}
            />
            {salaryErrorTemplate}
          </div>
          <button className="form__button">Добавить</button>
        </div>
      </form>
    );
  }
}

export default AddEmployee;
