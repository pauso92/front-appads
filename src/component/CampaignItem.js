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
                <h2 className="objList">{JSON.stringify(i.obj)}</h2>
                <h3 className="objList">{JSON.stringify(i.link)}</h3>
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
                <h3 className="objList">{JSON.stringify(i.link)}</h3>
              </div>
            </div>
          )
        }) :
        <h2>No hay campañas finalizadas</h2>
      }
      <div className="wrapbutton">
        <Link to="/home">
          <a className="button">Ir a Empresas </a>
        </Link>
      </div>
    </>
  );
}
export default CampaignItem