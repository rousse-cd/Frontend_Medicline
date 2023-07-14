import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import login from "../img/undraw_doctors_p6aq.svg";

import { Letters } from '../../helpers/Letters';
import { validateForm } from '../../helpers/validateUsuario';
import UsuarioService from '../../services/UsuarioService';

export const CreateUsuarioComponet = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [errors, setErrors] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: ''
    });

    const saveUsuario = (e) => {
        e.preventDefault();
        const usuario = { nombre, apellido, email, password };

        UsuarioService.createUsuario(usuario).then((response) => {
            console.log(response.data);
            navigate('/login');
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
                            <h2 style={{ color: '#ffffff' }}>Crear Cuenta</h2>
                            <p></p>
                        </div>
                        <div class="row gy-4">
                            <div class="col-lg-6">
                                <form class="card p-5">
                                    <div class="row gy-4">
                                        <div className="col-md-12 mb-3">
                                            <div className={`col-md-12 ${errors.nombre ? 'has-error' : nombre && 'is-valid'}`}>
                                                <label className="form-label"></label>
                                                <input
                                                    type="text"
                                                    placeholder='Nombre'
                                                    name="Nombre"
                                                    className={`form-control form-control-sm ${errors.nombre ? 'is-invalid' : nombre && 'is-valid'}`}
                                                    maxLength="25"
                                                    value={nombre}
                                                    onChange={(e) => setNombre(e.target.value)}
                                                    onKeyPress={Letters}
                                                    required
                                                />
                                                {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                                            </div>
                                            <div className={`col-md-12 ${errors.apellido ? 'has-error' : apellido && 'is-valid'}`}>
                                                <label className="form-label"></label>
                                                <input
                                                    type="text"
                                                    name="apellido"
                                                    placeholder='Apellido'
                                                    className={`form-control ${errors.apellido ? 'is-invalid' : apellido && 'is-valid'}`}
                                                    maxLength="20"
                                                    value={apellido}
                                                    onChange={(e) => setApellido(e.target.value)}
                                                    onKeyPress={Letters}
                                                    required
                                                />
                                                {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
                                            </div>
                                            <div className={`col-md-12 ${errors.email ? 'has-error' : email && 'is-valid'}`}>
                                                <label className="form-label"></label>
                                                <input
                                                    type="email"
                                                    placeholder='Correo electrónico'
                                                    name="email"
                                                    className={`form-control ${errors.email ? 'is-invalid' : email && 'is-valid'}`}
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                            <div className={`col-md-12 ${errors.password ? 'has-error' : password && 'is-valid'}`}>
                                                <label className="form-label"></label>
                                                <input
                                                    type="password"
                                                    placeholder='Contraseña'
                                                    name="password"
                                                    maxLength="55"
                                                    className={`form-control ${errors.password ? 'is-invalid' : password && 'is-valid'}`}
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                            </div>
                                            <center>
                                            <button
                                                className="button-signup"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    const { isValid, errors } = validateForm(nombre, apellido, email, password);
                                                    setErrors(errors);
                                                    if (isValid) {
                                                        saveUsuario(e);
                                                    }
                                                }}
                                            > Crear Cuenta</button></center>
                                        </div>
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

}


export default CreateUsuarioComponet;