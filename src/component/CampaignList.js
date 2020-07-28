import React from "react";
import CampaignItem from "./CampaignItem";

const CampaignList = (props) => {
  return (
    <>
      {
        props.data.map((item) => {
          return <CampaignItem data={item.campaniasTotal[0]} />
        })
      }
    </>
  );
}
export default CampaignList