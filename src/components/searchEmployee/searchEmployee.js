import { Component } from "react";
import "./searchEmployee.scss";

class SearchEmployees extends Component {
  state = {
    searchValue: "",
  };

  onUpdateSearch = ({ target }) => {
    this.setState({
      searchValue: target.value,
    });
    this.props.onUpdateSearch(target.value);
  };

  render() {
    const { searchValue } = this.state;
    return (
      <input
        value={searchValue}
        type="text"
        onChange={this.onUpdateSearch}
        className="search-input"
        placeholder="Поиск сотрудника..."
      />
    );
  }
}

export default SearchEmployees;
