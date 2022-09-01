// teaのすべてのデータを羅列する
// ファイル名は変えるかも(若干分かりづらいかも)
import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Lists from "./Lists";

const Teas = () => {
  const [allTeas, allTeasSet] = useState("test")
  // 全データを取得
  const url = "http://localhost:8000";

  const { data: teas, isLoaded, error } = useFetch(url);

  console.log(teas);

  // const test = [{id: 1, name: '抹茶', description: '緑茶1', tag: '緑茶'}
  // ,{id: 2, name: '煎茶', description: '煎茶2', tag: '緑茶'}
  // ,{id: 3, name: 'アールグレイ', description: '紅茶1', tag: '紅茶'}
  // ,{id: 4, name: 'セイロン', description: '紅茶2', tag: '紅茶'}
  // ,{id: 5, name: 'ローズヒップ', description: 'ハーブティー1', tag: 'ハーブティー'}
  // ,{id: 6, name: 'カモミール', description: 'ハーブティー2', tag: 'ハーブティー'}];
  // console.log(test.filter(element => element.tag === "紅茶"))

  // const teaTags = ["緑茶", "紅茶", "ハーブティー"]
  // teas.filter(element => element.tag === "紅茶")でタグごとに取り出せるから、
  // for文で何とかタグごとに分けて描画できないか試す

  
  return (
    <>
      <h1>All Teas</h1>
      { error && <div>{ error.message }</div> }
      { isLoaded && <div>Loading...</div> }
      {/* できればお茶のタグ別に羅列させたい */}
      { teas && <Lists values={teas} />}

    </>
  );
}
 
export default Teas;