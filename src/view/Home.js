import React from "react";
import { Link } from "react-router-dom";
import BrandList from "../component/BrandList"

export default function Auth() {
  const [state, setState] = React.useState([])
  React.useEffect(() => {
    async function brandItem() {
      const response = await fetch('http://localhost:8000/brand');
      const data = await response.json();
      setState(data)
    }
    brandItem();
  }, [])

  return (
    <>
      <BrandList data={state} />
    </>
  );
}