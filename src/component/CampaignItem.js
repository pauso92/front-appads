import React from "react";
import { Link } from "react-router-dom";

const CampaignItem = (props) => {
  return (
    <>
      {
        props.data.campaniasTotal[0].campaniasAct && props.data.campaniasTotal[0].campaniasAct.map(i => {
          return (
            <>
              <p>{JSON.stringify(i)}</p>
              <Link to="/dashboard">
                <p>{JSON.stringify(i.title)}</p>
              </Link>
              <p>{JSON.stringify(i.obj)}</p>
              <p>{JSON.stringify(i.link)}</p>
            </>
          )
        })
      })
    </>
  );
}
export default CampaignItem