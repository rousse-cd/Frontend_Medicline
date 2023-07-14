import React from 'react';

export const HomeDoctor = () => {
    return (
        <>
            <header id="header" class="fixed-top">
                <div class="container d-flex align-items-center">

                    <h1 class="logo me-auto">
                        <img src="../img/logomedicline2.png" alt="logo" width="150" /></h1>

                    <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

                

                    <a class="appointment-btn scrollto ml-auto" href="/"><span class="d-none d-md-inline">Cerrar</span> Sesión</a>

                </div>
            </header>
            <section id="hero" class="d-flex align-items-center">
                <div class="container">
                    <h1>Bienvenido a Medicline</h1>
                    <h2>Atención médica innovadora</h2>
                    <a class="btn-get-started scrollto" href="/add-doctor">Ingrese horario</a> &nbsp;&nbsp;
                    <a class="btn-get-started scrollto" href="/paciente-doctor">Control de pacientes</a>
                </div>
            </section>

        </>
    );
}
export default HomeDoctor;