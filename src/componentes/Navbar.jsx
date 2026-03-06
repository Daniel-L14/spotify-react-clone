import React from 'react';
import logo from '../assets/Logo.jpg';
import './Navbar.css';

const Navbar = () => {
return (
<nav className="spotify-navbar">
{/* SECCIÓN IZQUIERDA: Logo */}
<div className="nav-left">
<img src={logo} alt="Spotify" className="nav-logo-img" />
</div>

{/* SECCIÓN CENTRAL: Home + Buscador (Estilo Píldora) */}
<div className="nav-center">
<button className="home-icon-btn" title="Inicio">
<svg height="24" width="24" viewBox="0 0 24 24" fill="white">
<path d="M12.5 3.11l6.31 5.048V20.34H14.11V14.1h-4.22v6.24H4.11V8.158L10.42 3.11a1.25 1.25 0 0 1 1.58 0z"></path>
</svg>
</button>

<div className="search-container">
<div className="search-icon-box">
<svg height="24" width="24" viewBox="0 0 24 24" fill="#b3b3b3">
<path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.046l4.33 4.33a.75.75 0 0 0 1.061-1.06l-4.33-4.332a9.214 9.214 0 0 0 2.448-6.17c0-5.139-4.226-9.28-9.407-9.28zm-7.907 9.279c0-4.308 3.541-7.779 7.907-7.779s7.907 3.47 7.907 7.78-3.541 7.778-7.907 7.778-7.907-3.47-7.907-7.778z"></path>
</svg>
</div>
<input
type="text"
placeholder="¿Qué quieres reproducir?"
className="search-input"
/>
<div className="search-divider-vertical"></div>
<div className="browse-icon-box">
<svg height="24" width="24" viewBox="0 0 24 24" fill="#b3b3b3">
<path d="M15 15.5c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2 2 .895 2 2z"></path>
<path d="M1.5 10.5c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2zm19 0c0-1.105.895-2 2-2s2 .895 2 2-.895 2-2 2-2-.895-2-2z"></path>
</svg>
</div>
</div>
</div>

{/* SECCIÓN DERECHA: Menú de Navegación */}
<div className="nav-right">
<ul className="nav-links">
<li><a href="#premium">Premium</a></li>
<li><a href="#support">Ayuda</a></li>
<li><a href="#download">Descargar</a></li>
<li className="nav-divider-pipe">|</li>
<li>
<a href="#install" className="install-app-link">
<span>Instalar aplicación</span>
</a>
</li>
<li><a href="#signup" className="nav-signup-text">Registrarse</a></li>
<li>
<button className="nav-login-white-btn">Iniciar sesión</button>
</li>
</ul>
</div>
</nav>
);
};

export default Navbar;