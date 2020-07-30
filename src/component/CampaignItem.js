import React from "react";
import { Link } from "react-router-dom";
import '../css/CampaignItem.css'

const CampaignItem = (props) => {
  return (
    <>
      <h3 className="title">Campañas Activas:</h3>
      {
        props.data.campaniasAct && props.data.campaniasAct.map(i => {
          return (
            <>
              <div className="wrapCampaign">
                <Link to="/dashboard">
                  <p className="titleCampaign">{JSON.stringify(i.title)}</p>
                </Link>
                <p className="objList">{JSON.stringify(i.obj)}</p>
                <p className="objList">{JSON.stringify(i.link)}</p>
              </div>
            </>
          )
        })
      }
      <h3 className="title">Campañas Finalizadas:</h3>
      <div className="wrapbutton">
        <Link to="/home">
          <button className="button">Ir a Empresas </button>
        </Link>
      </div>
    </>
  );
}
export default CampaignItem