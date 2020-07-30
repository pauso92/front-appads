import React from 'react'
import '../css/login.css'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="wrapp">
          <div className="w_titulo">
            <p className="titulo">Iniciar Sesión</p>
          </div>
          <div className="wrapp_user">
            <label className="user" htmlFor="email">email<br></br></label>
            <input name="email" id="email" className="input" placeholder="tucorreo@dominio.com" type="text"></input><br></br>
            <label htmlFor="password" className="user">Password<br></br></label>
            <input name="password" id="password" className="input" placeholder="Ingresa pasword" type="text"></input>
          </div>
          <div className="div_register">
            <Link className="user_registrer" to="/Registrate">Registrate</Link>
          </div>
          <div className="wrap_button">

            <Link to="/home"><button className="button">Ingresa</button></Link>
          </div>
        </div>
      </>
    )

  }
}

export default Login