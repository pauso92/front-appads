import React from "react";
import { Link } from "react-router-dom";

const CampaignItem = (props) => {
  return (
    <>
      {
        props.data.campaniasAct && props.data.campaniasAct.map(i => {
          return (
            <>
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