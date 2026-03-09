import "./App.css"
import Navbar from "./componentes/Navbar"
import Sidebar from "./componentes/Sidebar"
import Inicio from "./componentes/Inicio"
import Discografia from "./componentes/Discografia"
import Player from "./componentes/Player"  
import Footer from "./componentes/Footer"
function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Inicio/>
      <Discografia/>
      <Player/><Footer/>
    </>
  )
}

export default App