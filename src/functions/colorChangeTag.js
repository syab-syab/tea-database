const colorChangeTag = (value) => {
    if (value === "日本茶") {
      return "green-tea"
    } else if (value === "紅茶") {
      return "black-tea"
    } else if (value === "ハーブティー") {
      return "herb-tea"
    } else if (value === "その他") {
      return "other-tea"
    } else {
      return null
    }
}
 
export default colorChangeTag;