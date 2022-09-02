// teaのすべてのデータを羅列する
// ファイル名は変えるかも(若干分かりづらいかも)
import useFetch from "../hooks/useFetch";
import Lists from "./Lists";

const Teas = () => {
  // 全データを取得
  const url = "http://localhost:8000";

  const { data: teas, isLoaded, error } = useFetch(url);

  console.log(teas);

  const teaTags = [
    {
      "id": 1,
      "name": "緑茶"
    },
    {
      "id": 2,
      "name": "紅茶"
    },
    {
      "id": 3,
      "name": "ハーブティー"
    }
  ];
  // teas.filter(element => element.tag === "紅茶")でタグごとに取り出せる
  
  return (
    <div>
      <h1>All Teas</h1>
      { error && <div>{ error.message }</div> }
      { isLoaded && <div>Loading...</div> }
      { teas &&
        teaTags.map(tag => (
          <div key={tag.id}>
            <p>{tag.name}</p>
            <Lists values={teas.filter(element => element.tag === tag.name)} />
          </div>
        ))
      }
    </div>
  );
}
 
export default Teas;