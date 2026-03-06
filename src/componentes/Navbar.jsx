const Navbar = () => {

const menu = [
{ name: "Premium" },
{ name: "Support" },
{ name: "Download" },
{ name: "Sign up" },
{ name: "Log in" }
]

return (
<nav className="navbar">
<h2 className="logo">Spotify</h2>

<ul>
{menu.map((item, index) => (
<li key={index}>{item.name}</li>
))}
</ul>
</nav>
)
}

export default Navbar