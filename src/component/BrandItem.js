import React from "react";
import { Link } from 'react-router-dom'

const BrandItem = (props) => {
  return (
    <div>
      <Link to={`/campaign/${props.data.name}`}>
        <img src={props.data.img} />
      </Link>
    </div>
  );
}
export default BrandItem