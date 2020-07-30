import React from "react";
import { Link } from 'react-router-dom'
import '../css/BrandItem.css'

const BrandItem = (props) => {
  return (
    <div className="wrap">
      <Link className="lista" to={`/campaign/${props.data.name}`}>
        <img src={props.data.img} />
      </Link>
    </div>
  );
}
export default BrandItem