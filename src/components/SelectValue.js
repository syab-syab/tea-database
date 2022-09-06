const SelectValue = ({ label, type, method, values }) => {
  // 必要はないけどこのコンポーネントを再利用できるようにするために
  // optionタグを渡された値によって自動生成できるようにする

  return (
    <div>
      <label>{label}</label>
      <select
          value={type}
          onChange={method}
          className="select-value"
        >
          {
            values.map(value => (
              <option key={value.id} value={value.value}>{value.name}</option>
            ))
          }
        </select>
    </div>
  );
}
 
export default SelectValue;