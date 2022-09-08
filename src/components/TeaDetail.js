import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

//　茶の分類によって背景のデザイン(背景色か画像)を変更する
// 日本茶なら緑、紅茶なら赤茶色...みたいに

const TeaDetail = () => {
  const { id } = useParams();

  // "http://localhost:8000/teas?id=2"だと配列として持ってきてしまう
  // ので、値を表示するのが面倒になるから
  // ↓のurlのようにteas/idとすれば配列にならず単体のオブジェクト
  // で持ってきてくれる
  const url = `http://localhost:8000/teas/${id}`;

  // 本番用url
  // const url = `https://tea-database-api.onrender.com/teas/${id}`

  const { data: tea, isLoaded, error } = useFetch(url);

  console.log(tea);

  const colorChange = (value) => {
    if (value === "多め") {
      return "many"
    } else if (value === "普通") {
      return "normal"
    } else if (value === "少なめ") {
      return "few"
    } else if (value === "無し") {
      return "none"
    } else {
      return "unknown"
    }
  };

  // カフェイン量を多さで色分けする
  // 多め→赤、普通→黄色、少なめ→緑、無し→青、不明→灰色
  return (
    <>
      { error && <div>{ error.message }</div> }
      { isLoaded && <div>Loading...</div> }
      { tea && 
        <article>
          <h1>
            { tea.tag }
          </h1>
          <p>
            { tea.name }
          </p>
          <p>
            { tea.description }
          </p>
          <p>
            <span>カフェイン量:</span> <span className={colorChange(tea.caffeine)}>{tea.caffeine}</span>
          </p>
        </article>
      }
    </>
  );
}
 
export default TeaDetail;