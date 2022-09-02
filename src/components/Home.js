import { useState } from "react";
import useFetch from "../hooks/useFetch";
// import SelectTag from "./SelectValue";
import SelectValue from "./SelectValue";
import Lists from "./Lists";

// アクセスを少なくしたいからselectで選びなおす度にアクセスするのを止めたい

const Home = () => {
  const [typeOfTea, setTypeOfTea] = useState('緑茶');

  // json-serverのurl
  // const url = `http://localhost:8000/teas?tag=${typeOfTea}`;

  // expressのurl
  const url = `http://localhost:8000/teas_tag/${typeOfTea}`;

  // テストのurl
  // const url = "http://localhost:8000";

  console.log(url);

  const { data: teas, isLoaded, error } = useFetch(url);
  
  console.log(teas);

  const handleChange = (e) => {
    setTypeOfTea(e.target.value);
  }

    // JSONから全部取ってきた方が再利用性も上がりそう
  const selectVal = [
    {"id": 1, "value": "緑茶", "name": "緑茶"},
    {"id": 2, "value": "紅茶", "name": "紅茶"},
    {"id": 3, "value": "ハーブティー", "name": "ハーブティー"}
  ];

  return (
    <>
      <SelectValue type={typeOfTea} method={handleChange} values={selectVal} />
      { error && <div>{ error.message }</div> }
      { isLoaded && <div>Loading...</div> }
      { teas && <Lists values={teas} />}
      {/* { teas && <Lists values={teas.filter(element => element.tag === typeOfTea)} />} */}
    </>
  );
}
 
export default Home;