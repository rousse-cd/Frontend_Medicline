import React from 'react';

export const Home = () => {
  return (
    <>
      <header id="header" class="fixed-top">
  <div class="container d-flex align-items-center">
    <h1 class="logo me-auto">
      <img src="../img/logomedicline2.png" alt="logo" width="150" />
    </h1>

    <a href="index.html" class="logo me-auto">
      <img src="assets/img/logo.png" alt="" class="img-fluid" />
    </a>

    <div class="ml-auto">
      <a class="appointment-btn scrollto" href="/login">
        <span class="d-none d-md-inline">Iniciar</span> Sesión
      </a>
      <a class="appointment-btn scrollto" href="/create-usuario">
        <span class="d-none d-md-inline">Crear</span> Cuenta
      </a>
    </div>
  </div>
</header>

      <main class="clinicas">
        <section class="clinicas">
          <div class="container m-auto">
            <div class="row">
              <div class="col-md-6 text-center">
                <div class="card">
                  <img src="../img/MediclineLogo.png" class="img-fluid mb-2" alt="Imagen Izquierda" />
                </div>
                <a href='/home-paciente'> <button class="button-medcl"> Medicline</button></a>

              </div>
              <div class="col-md-6 text-center">
                <div class="card">
                  <img src="../img/logo_medHistory.png" class="img-fluid mb-2" alt="Imagen Derecha" />
                </div>
                <a href='/add-medhistory'><button class="button-medh"> MediHistory</button></a>

              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );


}
export default Home;