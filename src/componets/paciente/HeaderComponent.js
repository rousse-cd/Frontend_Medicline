import React from 'react'
import { useLocation } from 'react-router-dom';
export const HeaderComponent = () => {
    const location = useLocation();

    if (location.pathname !== '/paciente' &&
    location.pathname !== '/home-paciente' &&
    location.pathname !== '/add-paciente'){
        return null;
    }
    return (

<header id="header" class="fixed-top">
  <div class="container d-flex align-items-center">

    <h1 class="logo me-auto">
        <img src="../img/logomedicline2.png" alt="logo" width="150"/></h1>
    
    <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>

    <nav id="navbar" class="navbar order-last order-lg-0">
      <ul>
        <li><a class="nav-link scrollto active" href="/home-paciente">Home</a></li>
        <li><a class="nav-link scrollto" href="#about">Nosotros</a></li>
        <li><a class="nav-link scrollto" href="#services">Servicios</a></li>
        <li><a class="nav-link scrollto" href="#departments">Especialidades</a></li>
        <li><a class="nav-link scrollto" href="#doctors">Doctores</a></li>
        <li class="dropdown"><a href="#"><span>Más</span> <i class="bi bi-chevron-down"></i></a>
          <ul>
            <li><a href="#">Galería</a></li>
            <li><a href="#">Preguntas Frecuentes</a></li>
            <li><a href="#contact">Contacto</a></li>

          </ul>
        </li>
        <li><a class="nav-link scrollto" href="/">Salir</a></li>
      </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>

    <a class="appointment-btn scrollto" href="/add-paciente"><span class="d-none d-md-inline">Reserva tu</span> Cita</a>

  </div>
</header>
    )
}

export default HeaderComponent;