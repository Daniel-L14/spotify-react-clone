import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="library">

        <div className="library-header">
          <h3>Tu biblioteca</h3>
          <button className="create-btn">+ Crear</button>
        </div>

        <div className="library-card">
          <h4>Crea tu primera playlist</h4>
          <p>¡Es muy fácil! Te vamos a ayudar</p>
          <button className="playlist-btn">Crear playlist</button>
        </div>

        <div className="library-card">
          <h4>Busquemos algunos podcasts para seguir</h4>
          <p>Te mantendremos al tanto de los nuevos episodios</p>
        </div>

      </div>

      <div className="sidebar-footer">

        <div className="footer-card">

          <div className="footer-links">
            <a href="#">Legal</a>
            <a href="#">Seguridad y Centro de Privacidad</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Cookies</a>
            <a href="#">Sobre los anuncios</a>
            <a href="#">Accesibilidad</a>
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