import React from "react";
import BrandItem from "./BrandItem";
import "../css/BrandList.css";

const BrandList = (props) => {
  return (
    <div className="brand-list">
      {
        props.data.map((item) => {
          return <BrandItem data={item} />
        })
      }
    </div>
  );
}
export default BrandList