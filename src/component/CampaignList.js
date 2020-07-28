import React from "react";
import CampaignItem from "./CampaignItem";

export default function CampaignList(props) {
  return (
    <>
      {/* {JSON.stringify(props.data[1])} */}
      {
        props.data.map((item) => {
          return <CampaignItem data={item} />
        })
      }
    </>
  );
}