import React from 'react'
import { useLocation } from 'react-router-dom';

export const FooterComponet = () => {
    const location = useLocation()
    if (location.pathname !== '/add-paciente' &&
    location.pathname !== '/paciente' &&
    location.pathname !== '/home-paciente') {
        return null;
    }

    return (
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>Medicline</h3>
                <p>Av. Canaval Moreira 450</p>
                <p>San Isidro - Lima</p>
                <p>Perú</p>
                {/*         <strong>Teléfono:</strong> +51 913 919 998<br>
        <strong>Email:</strong> medicline@clinica.com */}

              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Enlaces</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="/">Home</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Nosotros</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Servicios</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Doctores</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Contacto policy</a></li>
                </ul>
              </div>


              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Especialidades</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Pediatría</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Neurología</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Nutrición</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Reumatología</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Cardiología</a></li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Suscríbase a nuestro boletín</h4>
                <p>Suscríbete para obtener descuentos y promociones</p>
                <form>
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>

            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">

          <div class="me-md-auto text-center text-md-start">
            <div class="copy">
              &copy; Copyright Medicline. Derechos Reservados
            </div>
          </div>
          <div class="social-links text-center text-md-right ml-5">
            <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
            <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
            <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
            <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
          </div>
        </div>

      </footer>

    )
}

export default FooterComponet;