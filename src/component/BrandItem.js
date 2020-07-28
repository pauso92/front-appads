import React from "react";
import { Link } from 'react-router-dom'

export default function BrandItem(props) {
  return (
    <>
      <Link to="/campaign">
        <img src={props.data.img} />
      </Link>
    </>
  );
}