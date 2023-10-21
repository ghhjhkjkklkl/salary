import { Component } from "react";
import EmployeesList from "../employeesList/employeesList";
import Header from "../header/header";
import SearchEmployees from "../searchEmployee/searchEmployee";
import FilterEmployee from "../filterEmployee/filterEmployee";
import AddEmployee from "../addEmployee/addEmployee";
import { v4 as uuid } from "uuid";
import "./app.scss";

//ZNdwb23rtHuY2K2

class App extends Component {
  state = {
    data: [
      { name: "Миронов Максим", salary: 700, increase: false, id: uuid() },
      { name: "Захарова Анна", salary: 1300, increase: false, id: uuid() },
      { name: "Киреев Антон", salary: 2100, increase: false, id: uuid() },
      { name: "Киреев Denis", salary: 100, increase: false, id: uuid() },
    ],
    searchValue: "",
    filter: "all",
  };

  deleteEmployee = (id) => {
    this.setState(({ data }) => ({
      data: data.filter((object) => object.id !== id),
    }));
  };

  addEmployee = (name, salary) => {
    const newEmployee = {
      name,
      salary: +salary,
      increase: false,
      id: uuid(),
    };

    this.setState(({ data }) => ({
      data: [...data, newEmployee],
    }));
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((item) => item.id === id);
      const updatedItem = {
        ...data[index],
        increase: !data[index].increase,
      };
      return {
        data: [...data.slice(0, index), updatedItem, ...data.slice(index + 1)],
      };
    });
  };
  onChangeSalary = (salary, id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => (item.id === id ? { ...item, salary } : item)),
    }));
  };

  getPromotedEmployees = () =>
    this.state.data.filter((item) => item.increase).length;

  getTotalSalary = () =>
    this.state.data.reduce((acc, item) => (acc += item.salary), 0);

  onUpdateSearch = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  searchEmployees = () => {
    const { searchValue } = this.state;
    const newSearchValue = searchValue.toLowerCase().trim();
    if (!newSearchValue) {
      return this.state.data;
    }
    return this.state.data.filter((item) =>
      item.name.toLowerCase().includes(newSearchValue)
    );
  };

  filterEmployees = (employees) => {
    const { filter } = this.state;

    if (filter === "less1000") {
      return employees.filter((item) => item.salary < 1000);
    }

    if (filter === "more1000") {
      return employees.filter((item) => item.salary > 1000);
    }

    return employees;
  };

  onFilterSelect = (filter) => {
    this.setState({
      filter,
    });
  };

  render() {
    const { data, filter } = this.state;
    const employees = this.filterEmployees(this.searchEmployees());
    return (
      <div className="app">
        <div className="app__wrapper">
          <Header
            totalQuantity={data.length}
            totalSalary={this.getTotalSalary()}
            promotedEmployees={this.getPromotedEmployees()}
          />
          <SearchEmployees onUpdateSearch={this.onUpdateSearch} />
          <FilterEmployee
            filter={filter}
            onFilterEmployees={this.onFilterSelect}
          />
        </div>
        <EmployeesList
          data={employees}
          onDelete={this.deleteEmployee}
          onToggleIncrease={this.onToggleIncrease}
          onChangeSalary={this.onChangeSalary}
        />
        <div className="app__wrapper">
          <AddEmployee onAddEmployee={this.addEmployee} />
        </div>
      </div>
    );
  }
}

export default App;
