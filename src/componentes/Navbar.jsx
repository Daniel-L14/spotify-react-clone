import "./Navbar.css"
function Navbar(){

const menu = [
"Premium",
"Support",
"Download",
"Sign up",
"Log in"
]

return(
<nav className="navbar">

<div className="logo">Spotify</div>

<div className="menu">
{menu.map((item,index)=>(
<a key={index}>{item}</a>
))}
</div>

</nav>
)
}

export default Navbar