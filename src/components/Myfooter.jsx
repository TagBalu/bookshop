import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Chi siamo</h5>
            <p>Informazioni sull'azienda, mission, e valori.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Link utili</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/contatti" className="text-white">
                  Contatti
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-white">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Seguici</h5>
            <a href="https://facebook.com" className="text-white me-2">
              Facebook
            </a>
            <a href="https://instagram.com" className="text-white me-2">
              Instagram
            </a>
            <a href="https://linkedin.com" className="text-white">
              LinkedIn
            </a>
          </div>
        </div>
        <hr className="bg-white my-3" />
        <p className="mb-0">&copy; {new Date().getFullYear()} La tua Azienda. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
