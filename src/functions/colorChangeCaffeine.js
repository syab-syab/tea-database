const colorChangeCaffeine = (value) => {
  if (value === "多め") {
    return "many"
  } else if (value === "普通") {
    return "normal"
  } else if (value === "少なめ") {
    return "few"
  } else if (value === "無し") {
    return "none"
  } else {
    return "unknown"
  }
}
 
export default colorChangeCaffeine;