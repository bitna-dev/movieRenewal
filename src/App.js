import React from "react";
import Food from "./Food";


const foodILike = [
  {
  id:1,
  name: "Kimchi",
  image: "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  raiting: 4.5
  },
  {
  id:2,
  name: "samgyetang",
  image: "https://img.seoul.co.kr//img/upload/2019/07/25/SSI_20190725184016.jpg",
  raiting: 5
  }
]

function App() {
  return (
    <div className="App">
      <Food food={foodILike} />
    </div>
  );
}

export default App;
