import React from "react";
import { Link } from "react-router-dom";
import CampainList from "../component/CampainList";

const Campaign = () => {
  const [state, setState] = React.useState([])
  React.useEffect(() => {
    async function campainItem() {
      const response = await fetch('http://localhost:8000/campanias');
      const data = await response.json();
      setState(data)
    }
    campainItem();
  }, [])
  return (
    <>
      <CampainList data={state} />
    </>
  );
}
export default Campaign