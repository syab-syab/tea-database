const SelectValue = ({ type, method, values }) => {

  return (
    <div>
      <select
          value={type}
          onChange={method}
          className="select-value"
        >
          {
            values.map(value => (
              <option key={value.id} value={value.value}>{value.name} ▼</option>
            ))
          }
        </select>
    </div>
  );
}
 
export default SelectValue;