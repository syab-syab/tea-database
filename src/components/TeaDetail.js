import { useParams } from "react-router";
// import useFetch from "../hooks/useFetch";
import colorChangeTag from "../functions/colorChangeTag";
import colorChangeCaffeine from "../functions/colorChangeCaffeine";
// import LoadingImg from "../images/loading.gif";
// import TeaUrl from "../data/url.json";
import TeasData from "../data/db.json";

//　茶の分類によって背景のデザイン(背景色か画像)を変更する
// 日本茶なら緑、紅茶なら赤茶色...みたいに

const TeaDetail = () => {
  const { id } = useParams();


  // 本番用url
  // const url = `${TeaUrl["url"][0].url}/${id}`;
  // const { data: tea, isLoaded, error } = useFetch(url);

  const tea = TeasData["teas"].find(t => t.id === Number(id))

  return (
    <>
      {/* { error && <div>{ error.message }</div> }
      { isLoaded && <div><img src={LoadingImg} alt="Loading" /></div> } */}
      { tea && 
        <article className="article">
          <h1 className={`${colorChangeTag(tea.tag)} heading-content-title`}>
            { tea.tag }
          </h1>
          <h1 className="heading-content-title">
            { tea.name }
          </h1>
          <p className="tea-description">
            { tea.description }
          </p>
          <p style={{fontSize: "3rem"}}>
            <span>カフェイン量:</span> <span className={colorChangeCaffeine(tea.caffeine)}>{tea.caffeine}</span>
          </p>
        </article>
      }
    </>
  );
}
 
export default TeaDetail;