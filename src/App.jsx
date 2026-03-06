import "./App.css"
import { FaSpotify, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"
import { MdMusicNote, MdDevices, MdLibraryMusic, MdHeadphones } from "react-icons/md"

function App() {

const navLinks = [
"Premium",
"Soporte",
"Descargar"
]

const features = [
{
icon: <MdMusicNote />,
title: "Reproduce lo que quieras",
text: "Escucha millones de canciones y podcasts."
},
{
icon: <MdLibraryMusic />,
title: "Descubre música nueva",
text: "Encuentra playlists y artistas increíbles."
},
{
icon: <MdDevices />,
title: "Escucha en cualquier lugar",
text: "Disponible en celular, tablet y computador."
},
{
icon: <MdHeadphones />,
title: "Calidad increíble",
text: "Disfruta música con excelente sonido."
}
]

const plans = [
{
name: "Individual",
price: "$16.900 / mes",
description: "1 cuenta Premium"
},
{
name: "Duo",
price: "$21.900 / mes",
description: "2 cuentas Premium"
},
{
name: "Familiar",
price: "$26.900 / mes",
description: "Hasta 6 cuentas"
},
{
name: "Estudiantes",
price: "$8.900 / mes",
description: "Para universitarios"
}
]

const footerData = [
{
title: "Compañía",
links:["Acerca de","Empleo","For the Record"]
},
{
title:"Comunidades",
links:["Para artistas","Desarrolladores","Publicidad","Inversionistas"]
},
{
title:"Enlaces útiles",
links:["Soporte","App móvil gratis","Popular por país"]
}
]

return (

<div>

{/* NAVBAR */}

<nav className="navbar">

<div className="logo">
<FaSpotify size={30}/>
<h2>Spotify</h2>
</div>

<div className="navLinks">

{navLinks.map((link,index)=>(
<a key={index} href="#">{link}</a>
))}

<span>|</span>

<a href="#">Registrarse</a>
<a href="#">Iniciar sesión</a>

</div>

</nav>


{/* HERO */}

<section className="hero">

<h1>Escucha música sin límites</h1>

<p>Millones de canciones y podcasts. Sin tarjeta de crédito.</p>

<button>OBTENER SPOTIFY FREE</button>

</section>


{/* BENEFICIOS */}

<section className="features">

<h2>¿Por qué Spotify?</h2>

<div className="featuresGrid">

{features.map((item,index)=>(

<div className="featureCard" key={index}>

<div className="icon">
{item.icon}
</div>

<h3>{item.title}</h3>

<p>{item.text}</p>

</div>

))}

</div>

</section>


{/* PLANES */}

<section className="plans">

<h2>Elige tu plan</h2>

<div className="plansGrid">

{plans.map((plan,index)=>(

<div className="planCard" key={index}>

<h3>{plan.name}</h3>

<h4>{plan.price}</h4>

<p>{plan.description}</p>

<button>Elegir plan</button>

</div>

))}

</div>

</section>


{/* FOOTER */}

<footer className="footer">

<div className="footerTop">

<div className="logo">
<FaSpotify size={28}/>
<h2>Spotify</h2>
</div>

<div className="footerColumns">

{footerData.map((section,index)=>(

<div key={index}>

<h4>{section.title}</h4>

{section.links.map((link,i)=>(
<p key={i}>{link}</p>
))}

</div>

))}

</div>

<div className="social">

<FaInstagram/>
<FaTwitter/>
<FaFacebook/>

</div>

</div>

<div className="footerBottom">

<p>© 2026 Spotify AB</p>

</div>

</footer>

</div>

)

}

export default App