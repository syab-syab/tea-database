import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SelectTag from "./SelectTag";
import Lists from "./Lists";


const Home = () => {
  const [typeOfTea, setTypeOfTea] = useState('緑茶');

  // json-serverのurl
  // const url = `http://localhost:8000/teas?tag=${typeOfTea}`;

  // expressのurl
  const url = `http://localhost:8000/teas_tag/${typeOfTea}`;

  console.log(url);

  const { data: teas, isLoaded, error } = useFetch(url);
  
  console.log(teas);

  const handleChange = (e) => {
    setTypeOfTea(e.target.value);
  }

    // JSONから全部取ってきた方が再利用性も上がりそう
  const selectVal = [
    {"value": "緑茶", "name": "緑茶"},
    {"value": "紅茶", "name": "紅茶"},
    {"value": "ハーブティー", "name": "ハーブティー"}
  ];

  return (
    <>
      <SelectTag type={typeOfTea} method={handleChange} values={selectVal} />
      { error && <div>{ error.message }</div> }
      { isLoaded && <div>Loading...</div> }
      { teas && <Lists values={teas} />}
    </>
  );
}
 
export default Home;