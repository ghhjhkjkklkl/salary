import "./filterEmployee.scss";

function FilterEmployee({ filter, onFilterEmployees }) {
  const buttonsData = [
    { label: "Все сотрудники", marker: "all" },
    { label: "Сотрудники с З/П < 1000$", marker: "less1000" },
    { label: "Сотрудники с З/П > 1000$", marker: "more1000" },
  ];

  const buttons = buttonsData.map(({ label, marker }) => (
    <button
      key={marker}
      className={`items-filter__button ${filter === marker ? "active" : ""} `}
      onClick={() => onFilterEmployees(marker)}
    >
      {label}
    </button>
  ));

  return <div className="items-filter">{buttons}</div>;
}

export default FilterEmployee;
