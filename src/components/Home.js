import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SelectValue from "./SelectValue";
import Lists from "./Lists";
import TeaType from "../data/tea-type.json";
import LoadingImg from "../images/loading.gif";
import TeaUrl from "../data/url.json";

const Home = () => {
  const [typeOfTea, setTypeOfTea] = useState('日本茶');


  // テストのurl
  // const url = "http://localhost:8000/teas";

  // 本番url
  const url = TeaUrl["url"][0].url;

  const { data: teas, isLoaded, error } = useFetch(url);
  

  const handleChange = (e) => {
    setTypeOfTea(e.target.value);
  }

  // お茶の分類(別ファイルに切り出した)
  const selectVal = TeaType["tea-type"];

  return (
    <>
      <h1 className="heading-content-title">お茶のタイプ</h1>
      <SelectValue type={typeOfTea} method={handleChange} values={selectVal} />
      { error && <div>{ error.message }</div> }
      { isLoaded && <div><img src={LoadingImg} alt="Loading" /></div> }
      { teas && <Lists values={teas.filter(element => element.tag === typeOfTea)} />}
    </>
  );
}
 
export default Home;