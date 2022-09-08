// teaのすべてのデータを羅列する
import useFetch from "../hooks/useFetch";
import Lists from "./Lists";
import TeaType from "../data/tea-type.json";

const AllTeas = () => {
  // 全データを取得
  const url = "http://localhost:8000/teas";

  // 本番url
  // const url = "https://tea-database-api.onrender.com/teas";

  const { data: teas, isLoaded, error } = useFetch(url);

  console.log(teas);

  // お茶の分類(別ファイルに切り出した)
  const teaTags = TeaType["tea-type"];
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
 
export default AllTeas;