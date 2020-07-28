import React from "react";
import BrandItem from "./BrandItem";

const BrandList = (props) => {
  return (
    <>
      {
        props.data.map((item) => {
          return <BrandItem data={item} />
        })
      }
    </>
  );
}
export default BrandList