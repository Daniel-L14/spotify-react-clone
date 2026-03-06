import "./App.css";

function App() {

  const navLinks = ["Premium", "Soporte", "Descargar"];

  const footerData = [
    {
      title: "Compañía",
      links: ["Acerca de", "Empleo", "For the Record"]
    },
    {
      title: "Comunidades",
      links: ["Para artistas", "Desarrolladores", "Publicidad", "Inversionistas"]
    },
    {
      title: "Enlaces útiles",
      links: ["Soporte", "App móvil gratis", "Popular por país"]
    },
    {
      title: "Planes de Spotify",
      links: [
        "Premium Individual",
        "Premium Duo",
        "Premium Familiar",
        "Premium para Estudiantes",
        "Spotify Free"
      ]
    }
  ];

  const social = ["Instagram", "Twitter", "Facebook"];

  const legal = [
    "Legal",
    "Centro de privacidad",
    "Política de privacidad",
    "Cookies",
    "Sobre los anuncios"
  ];

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">

        <h2 className="logo">Spotify</h2>

        <div className="nav-links">
          {navLinks.map((item, index) => (
            <span key={index}>{item}</span>
          ))}

          <span className="divider">|</span>

          <span>Registrarse</span>
          <span>Iniciar sesión</span>
        </div>

      </nav>

      {/* HERO */}

      <section className="hero">

        <h1>Escucha música sin límites</h1>

        <p>Millones de canciones y podcasts. Sin tarjeta de crédito.</p>

        <button>OBTENER SPOTIFY FREE</button>

      </section>

      {/* INFO */}

      <section className="info">

        <h2>¿Por qué Spotify?</h2>

        <div className="info-grid">

          <div className="info-card">
            <h3>Reproduce lo que quieras</h3>
            <p>Escucha millones de canciones y podcasts.</p>
          </div>

          <div className="info-card">
            <h3>Descubre música nueva</h3>
            <p>Encuentra artistas y playlists que te encantarán.</p>
          </div>

          <div className="info-card">
            <h3>Escucha en cualquier lugar</h3>
            <p>Disponible en móvil, tablet y computadora.</p>
          </div>

          <div className="info-card">
            <h3>Gratis</h3>
            <p>Disfruta música sin pagar nada.</p>
          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-container">

          <h2 className="logo">Spotify</h2>

          <div className="footer-columns">

            {footerData.map((section, index) => (

              <div key={index} className="footer-column">

                <h4>{section.title}</h4>

                {section.links.map((link, i) => (
                  <p key={i}>{link}</p>
                ))}

              </div>

            ))}

          </div>

          <div className="social">

            {social.map((item, index) => (
              <span key={index}>{item}</span>
            ))}

          </div>

        </div>

        <div className="footer-bottom">

          <div className="legal">

            {legal.map((item, index) => (
              <span key={index}>{item}</span>
            ))}

          </div>

          <p>© 2026 Spotify AB</p>

        </div>

      </footer>

    </div>
  );
}

export default App;