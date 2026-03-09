import "./Sidebar.css"

function Sidebar() {

  const libraryCards = [
    {
      title: "Crea tu primera playlist",
      description: "¡Es muy fácil! Te vamos a ayudar",
      button: "Crear playlist"
    },
    {
      title: "Busquemos algunos podcasts para seguir",
      description: "Te mantendremos al tanto de los nuevos episodios"
    }
  ]

  const footerLinks = [
    "Legal",
    "Seguridad y Centro de Privacidad",
    "Política de Privacidad",
    "Cookies",
    "Sobre los anuncios",
    "Accesibilidad"
  ]

  return (
    <div className="sidebar">

      <div className="library">

        <div className="library-header">
          <h3>Tu biblioteca</h3>
          <button className="create-btn">+ Crear</button>
        </div>

        {libraryCards.map((card, index) => (
          <div className="library-card" key={index}>
            <h4>{card.title}</h4>
            <p>{card.description}</p>

            {card.button && (
              <button className="playlist-btn">
                {card.button}
              </button>
            )}

          </div>
        ))}

      </div>

      <div className="sidebar-footer">

        <div className="footer-card">

          <div className="footer-links">
            {footerLinks.map((link, index) => (
              <a href="#" key={index}>
                {link}
              </a>
            ))}
          </div>

          <p className="cookies">Cookies</p>

          <button className="language-btn">
            🌐 Español de Latinoamérica
          </button>

        </div>

      </div>

    </div>
  )
}

export default Sidebar