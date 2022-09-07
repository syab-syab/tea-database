import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SelectValue from "./SelectValue";
import Lists from "./Lists";
import TeasCaffeine from "../data/caffeine-type.json";

const Caffeine = () => {
  const [typeOfCaffeine, setTypeOfCaffeine] = useState('普通');


  // テストのurl
  // const url = "http://localhost:8000/teas";

  // 本番url
  const url = "https://tea-database-api.onrender.com/teas";

  console.log(url);

  const { data: teas, isLoaded, error } = useFetch(url);
  
  
  console.log(teas);


  const handleChange = (e) => {
    setTypeOfCaffeine(e.target.value);
  }

  // お茶の分類(別ファイルに切り出した)
  const selectVal = TeasCaffeine["caffeine"];

  return (
    <>
      <SelectValue label="カフェイン量" type={typeOfCaffeine} method={handleChange} values={selectVal} />
      { error && <div>{ error.message }</div> }
      { isLoaded && <div>Loading...</div> }
      { teas && <Lists values={teas.filter(element => element.caffeine === typeOfCaffeine)} />}
    </>
  );
}
 
export default Caffeine;