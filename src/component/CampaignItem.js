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
                <Link className="link" to="/dashboard">
                  <div className="wrapCampaign">
                    <h2 className="titleCampaign">{JSON.stringify(i.title)}</h2>
                    <p className="objList"><span className="span">Titulo: </span> {JSON.stringify(i.obj)}</p>
                    <p className="objLink"><span className="span">Link Campaña:</span> {JSON.stringify(i.link)}</p>
                  </div>
                </Link>
              </>
            )
          }) :
          <h2 className="inactivas">No hay campañas activas</h2>
      }
      <h3 className="title">Campañas Finalizadas:</h3>
      {
        props.data.campaniasEnding !== undefined ?
          props.data.campaniasEnding.map(i => {
            return (
              <div>
                <Link className="link" to="/dashboard">
                  <div className="wrapCampaign">
                    <h1 className="titleCampaign">{JSON.stringify(i.title)}</h1>
                    <h2 className="objList"><span className="span">Titulo: </span>{JSON.stringify(i.obj)}</h2>
                    <a className="objLink"><span className="span">Link Campaña:</span>{JSON.stringify(i.link)}</a>
                  </div>
                </Link>
              </div>
            )
          }) :
          <h2 className="inactivas">No hay campañas finalizadas</h2>
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