const SelectTag = ({ type, method, values }) => {
  // 必要はないけどこのコンポーネントを再利用できるようにするために
  // optionタグを渡された値によって自動生成できるようにする

  return (
    <>
      <label>お茶のタイプ</label>
      <select
          value={type}
          onChange={method}
        >
          {
            values.map(value => (
              <option value={value.value}>{value.name}</option>
            ))
          }
        </select>
    </>
  );
}
 
export default SelectTag;