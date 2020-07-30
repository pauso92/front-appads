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
              <div>
                <Link to="/dashboard">
                  <p className="titleCampaign">{JSON.stringify(i.title)}</p>
                </Link>
                <p>{JSON.stringify(i.obj)}</p>
                <p>{JSON.stringify(i.link)}</p>
              </div>
            </>
          )
        })
      })
      
              <div>
                <Link to="/home">
                  <button>Ir a Campañas</button>
                </Link>
              </div>
    </>
  );
}
export default CampaignItem