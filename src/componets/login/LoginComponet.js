import React, { useState } from 'react';
import { validateForm } from '../../helpers/validateLogin';
import login from "../img/undraw_doctors_p6aq.svg";

import { useNavigate } from "react-router-dom";
import UsuarioService from '../../services/UsuarioService';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const sendUsuario = (e) => {
    e.preventDefault();
    const usuario = { email, password };

    UsuarioService.loginUsuario(usuario).then((response) => {
      console.log(response.data);
      // const token = response.data.tokenJwt;
      // const { nombre, apellido, email } = response.data;
      // const usuario = {
      //   nombre,
      //   apellido,
      //   email
      // }
      if (response.data != "Fail") {
        localStorage.setItem('token', response.data);
        // localStorage.setItem('usuario', JSON.stringify(usuario));
        setLoginError(false);
        navigate('/home-doctor');
      } else {
        setLoginError(true);
      }
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <>
    <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <h1 class="logo me-auto">
                        <img src="../img/logomedicline2.png" alt="logo" width="150" /></h1>

                    <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

                

                    <a class="appointment-btn scrollto ml-auto" href="/"><span class="d-none d-md-inline">Salir</span></a>

                </div>
            </header>
    
  <main id="main" style={{ backgroundColor: '#389BD4' }}>
    <section id="services" class="services mt-5">
      <div class="container">
        <div class="section-title">
          <h2 style={{ color: '#ffffff' }}>Login</h2>
          <p></p>
        </div>
        <div class="row gy-4">
          <div class="col-lg-6">
            <form class="card p-5">
              {loginError && (
                <div className="row justify-content-center">
                  <div className="col-md-12">
                    <div className="alert alert-danger error-message" role="alert">
                      Las credenciales no coinciden
                    </div>
                  </div>
                </div>
              )}
              <div class="row gy-4">
                <div className="col-md-12">
                  <div className="form-group">
                    <label className="form-label"></label>
                    <input
                      type="email"
                      name="email"
                      placeholder="correo"
                      className={`form-control ${errors.email ? 'is-invalid' : email && 'is-valid'}`}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>
                  <div class="form-group">
                    <label className="form-label"></label>
                    <input
                      type="password"
                      name="password"
                      maxLength="55"
                      placeholder="contraseña"
                      className={`form-control ${errors.password ? 'is-invalid' : password && 'is-valid'}`}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    <div class="col-md-12">
                      <center><div class="olvidaste microsftsty">Inicia sesión con Microsoft</div></center>
                      <center><div class="olvidaste">¿Olvidaste tu contraseña?</div></center>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a href="/create-usuario" class="button-login">
                  <span>Crear cuenta</span>
                </a>
                <button
                  className="button-login"
                  onClick={(e) => {
                    e.preventDefault();
                    const { isValid, errors } = validateForm(email, password);
                    setErrors(errors);
                    if (isValid) {
                      sendUsuario(e);
                    }
                  }}
                >
                  Ingresar
                </button>
              </div>
            </form>
          </div>
          <div class="col-lg-6">
            <img src={login} class="img-fluid" alt="login" />
          </div>
        </div>
      </div>
    </section>
  </main>


    
    </>
  );
};

export default Login;