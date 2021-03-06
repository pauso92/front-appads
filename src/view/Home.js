import React from "react";
import { Link } from "react-router-dom";
import BrandList from "../component/BrandList";
import "../css/Home.css";

const data = [
  {
    name: "Chevrolet",
    text: "Chevrolet México",
    campaniasAct: 2,
    campaniasEnding: 3,
    campaniasTot: 5,
    img: "https://via.placeholder.com/150/FFFFFF/000000/?text=Chevrolet",
  },
  {
    name: "Adidas",
    text: "Adidas México",
    campaniasAct: 5,
    campaniasEnding: 0,
    campaniasTot: 5,
    img: "https://via.placeholder.com/150/FFFFFF/000000/?text=Adidas",
  },
  {
    name: "Grupo Bimbo",
    text: "Bimbo México",
    campaniasAct: 4,
    campaniasEnding: 10,
    campaniasTot: 14,
    img: "https://via.placeholder.com/150/FFFFFF/000000/?text=Bimbo",
  },
  {
    name: "Coca-Cola",
    text: "Femsa México",
    campaniasAct: 3,
    campaniasEnding: 0,
    campaniasTot: 3,
    img: "https://via.placeholder.com/150/FFFFFF/000000/?text=Coca-Cola",
  },
  {
    name: "Viva Aerobus",
    text: "Viva Aerobus",
    campaniasAct: 2,
    campaniasEnding: 1,
    campaniasTot: 3,
    img: "https://via.placeholder.com/150/FFFFFF/000000/?text=Viva-Aerobus",
  },
  {
    name: "Hasbro",
    text: "Hasbro Toys",
    campaniasAct: 0,
    campaniasEnding: 2,
    campaniasTot: 2,
    img: "https://via.placeholder.com/150/FFFFFF/000000/?text=Hasbro",
  },
]

const Home = () => {
  const [state, setState] = React.useState([])
  React.useEffect(() => {
    async function brandItem() {
      // const response = await fetch('http://localhost:8000/brand');
      // const data = await response.json();
      setState(data)
    }
    brandItem();
  }, [])

  return (
    <div className="body">
      <BrandList data={state} />
    </div>
  );
}
export default Home