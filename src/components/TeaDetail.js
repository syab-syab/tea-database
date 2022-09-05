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

  const { data: tea, isLoaded, error } = useFetch(url);

  console.log(tea);

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
        </article>
      }
    </>
  );
}
 
export default TeaDetail;