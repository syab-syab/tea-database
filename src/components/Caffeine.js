import { useState } from "react";
import useFetch from "../hooks/useFetch";
import SelectValue from "./SelectValue";
import Lists from "./Lists";
import TeasCaffeine from "../data/caffeine-type.json";
import LoadingImg from "../images/loading.gif";
import TeaUrl from "../data/url.json";

const Caffeine = () => {
  const [typeOfCaffeine, setTypeOfCaffeine] = useState('普通');


  // テストのurl
  // const url = "http://localhost:8000/teas";

  // 本番url
  const url = TeaUrl["url"][0].url;

  const { data: teas, isLoaded, error } = useFetch(url);
  

  const handleChange = (e) => {
    setTypeOfCaffeine(e.target.value);
  }

  const selectVal = TeasCaffeine["caffeine"];

  return (
    <>
      <h1 className="heading-content-title">カフェイン量</h1>
      <SelectValue type={typeOfCaffeine} method={handleChange} values={selectVal} />
      { error && <div>{ error.message }</div> }
      { isLoaded && <div><img src={LoadingImg} alt="Loading" /></div>  }
      { teas && <Lists values={teas.filter(element => element.caffeine === typeOfCaffeine)} />}
    </>
  );
}
 
export default Caffeine;