import { Link } from "react-router-dom";

// propsを{teas}にすれば、props.teasではなくteasだけで参照できる
// ただ、propsを二つ以上使わない限り必要なさそう
const Lists = ({values}) => {
  return (
    <>
      <nav>
        {values.map(tea => (
          // 各ページの詳細が表示されないので修正する
          <div key={tea.id}>
            <Link to={`/teas/${tea.id}`}>
              {tea.name}
            </Link>
          </div>
        ))}
      </nav>
    </>
  );
}
 
export default Lists;