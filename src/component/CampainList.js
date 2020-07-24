import React from "react";
import CampainItem from "./BrandItem";

export default function CampainList(props) {
  return (
    <>
      {
        props.data.map((item) => {
          return <CampainItem data={item} />
        })
      }
    </>
  );
}