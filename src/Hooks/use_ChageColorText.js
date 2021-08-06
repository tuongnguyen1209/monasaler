const ChangeColorText = (hex = "") => {
  if (!hex) return "";

  hex = hex.split("(")[1].split(")")[0];
  const color = hex.split(",");

  // console.log(color);
  let o = Math.round(
    (parseInt(color[0]) * 299 +
      parseInt(color[1]) * 587 +
      parseInt(color[2]) * 114) /
      1000
  );
  if (o > 125) {
    return "black";
  } else {
    return "white";
  }
};
export default ChangeColorText;
