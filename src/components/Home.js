import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SelectValue from "./SelectValue";
import Lists from "./Lists";
import TeaType from "../data/tea-type.json";

const Home = () => {
  const [typeOfTea, setTypeOfTea] = useState('日本茶');

  // json-serverのurl
  // const url = `http://localhost:8000/teas?tag=${typeOfTea}`;

  // expressのurl
  // const url = `http://localhost:8000/teas_tag/${typeOfTea}`;

  // テストのurl
  const url = "http://localhost:8000";

  console.log(url);

  const { data: teas, isLoaded, error } = useFetch(url);
  
  
  console.log(teas);


  const handleChange = (e) => {
    setTypeOfTea(e.target.value);
  }

  // お茶の分類(別ファイルに切り出した)
  const selectVal = TeaType["tea-type"];

  return (
    <>
      <SelectValue label="お茶のタイプ" type={typeOfTea} method={handleChange} values={selectVal} />
      { error && <div>{ error.message }</div> }
      { isLoaded && <div>Loading...</div> }
      { teas && <Lists values={teas.filter(element => element.tag === typeOfTea)} />}
    </>
  );
}
 
export default Home;