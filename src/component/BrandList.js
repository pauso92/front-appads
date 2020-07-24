import React from "react";
import BrandItem from "./BrandItem";

export default function BrandList(props) {
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