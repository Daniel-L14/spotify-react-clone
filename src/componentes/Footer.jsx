import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const footerData = [
  {
    titulo: "Empresa",
    links: ["Acerca de", "Empleo", "For the Record"],
  },
  {
    titulo: "Comunidades",
    links: [
      "Para artistas",
      "Desarrolladores",
      "Publicidad",
      "Inversores",
      "Proveedores",
    ],
  },
  {
    titulo: "Enlaces útiles",
    links: [
      "Asistencia",
      "App gratis para móvil",
      "Popular por país",
      "Importar tu música",
    ],
  },
  {
    titulo: "Planes de Spotify",
    links: [
      "Premium Individual",
      "Premium Duo",
      "Premium Familiar",
      "Premium para Estudiantes",
      "Spotify Free",
    ],
  },
];

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          <div className="footer-columns">
            {footerData.map((section, index) => (
              <div key={index} className="footer-column">
                <h4>{section.titulo}</h4>

                <ul>
                  {section.links.map((link, i) => (
                    <li key={i}>{link}</li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

          <div className="footer-social">
            <div className="icon">
              <FaInstagram />
            </div>

            <div className="icon">
              <FaTwitter />
            </div>

            <div className="icon">
              <FaFacebook />
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Spotify AB
        </div>
      </footer>

      {/* Barra inferior tipo Spotify */}
      <div className="promo-bar">
        <div className="promo-content">

          <div>
            <p className="promo-title">Muestra de Spotify</p>
            <p className="promo-desc">
              Escucha millones de canciones gratis, con anuncios ocasionales.
              No hace falta tarjeta de crédito.
            </p>
          </div>

          <button className="promo-btn">
            Registrarte gratis
          </button>

        </div>
      </div>
    </>
  );
}

export default Footer;