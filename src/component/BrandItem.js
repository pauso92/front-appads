import React from "react";
import { Link } from 'react-router-dom'

const BrandItem = (props) => {
  return (
    <>
      <Link to={`/campaign/${props.data.name}`}>
        <img src={props.data.img} />
      </Link>
    </>
  );
}
export default BrandItem