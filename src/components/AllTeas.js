// teaのすべてのデータを羅列する
import useFetch from "../hooks/useFetch";
import Lists from "./Lists";
import TeaType from "../data/tea-type.json";
import colorChangeTag from "../functions/colorChangeTag";
import LoadingImg from "../images/loading.gif";
import TeaUrl from "../data/url.json";

const AllTeas = () => {
  // 全データを取得
  // const url = "http://localhost:8000/teas";

  // 本番url
  const url = TeaUrl["url"][0].url;

  const { data: teas, isLoaded, error } = useFetch(url);

  const teaTags = TeaType["tea-type"];
  
  return (
    <>
      { error && <div>{ error.message }</div> }
      { isLoaded && <div><img src={LoadingImg} alt="Loading" /></div> }
      { teas &&
        teaTags.map(tag => (
          <div key={tag.id} style={{ marginBottom: '3.5rem'}}>
            <h1 className={`${colorChangeTag(tag.name)} heading-content-title`} style={{ margin: 0}}>{tag.name}</h1>
            <Lists values={teas.filter(element => element.tag === tag.name)} />
          </div>
        ))
      }
    </>
  );
}
 
export default AllTeas;