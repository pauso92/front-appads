import React from "react";
import { Link } from "react-router-dom";
import '../css/CampaignItem.css'

const CampaignItem = (props) => {
  return (
    <>
      <h3 className="title">Campañas Activas:</h3>
      {
        props.data.campaniasAct !== undefined ?
        props.data.campaniasAct.map(i => {
          return (
            <>
              <div className="wrapCampaign">
                <Link to="/dashboard">
                  <h1 className="titleCampaign">{JSON.stringify(i.title)}</h1>
                </Link>
                <p className="objList">{JSON.stringify(i.obj)}</p>
                <p className="objLink">{JSON.stringify(i.link)}</p>
              </div>
            </>
          )
        }):
        <h2>No hay campañas activas</h2>
      }
      <h3 className="title">Campañas Finalizadas:</h3>
      {
        props.data.campaniasEnding !== undefined ? 
        props.data.campaniasEnding.map(i => {
          return (
            <div>
              <div className="wrapCampaign">
                <Link to="/dashboard">
                  <h1 className="titleCampaign">{JSON.stringify(i.title)}</h1>
                </Link>
                <h2 className="objList">{JSON.stringify(i.obj)}</h2>
                <a className="objLink">{JSON.stringify(i.link)}</a>
              </div>
            </div>
          )
        }) :
        <h2>No hay campañas finalizadas</h2>
      }
      <div className="wrapbutton">
        <Link to="/home">
          <button className="button">Ir a Empresas </button>
        </Link>
      </div>
    </>
  );
}
export default CampaignItem