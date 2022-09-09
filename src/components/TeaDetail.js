import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import colorChangeTag from "../functions/colorChangeTag";
import colorChangeCaffeine from "../functions/colorChangeCaffeine";

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

  // カフェイン量を多さで色分けする
  // 多め→赤、普通→黄色、少なめ→緑、無し→青、不明→灰色
  return (
    <>
      { error && <div>{ error.message }</div> }
      { isLoaded && <div>Loading...</div> }
      { tea && 
        <article className="article">
          <h1 className={`${colorChangeTag(tea.tag)} heading-content-title`}>
            { tea.tag }
          </h1>
          <h1 className="heading-content-title">
            { tea.name }
          </h1>
          <p>
            { tea.description }
          </p>
          <p style={{fontSize: "3rem"}}>
            <span>カフェイン量:</span> <span className={colorChangeCaffeine(tea.caffeine)}>{tea.caffeine}</span>
          </p>
        </article>
      }
    </>
  );
}
 
export default TeaDetail;