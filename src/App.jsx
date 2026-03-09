import "./App.css"
import Navbar from "./componentes/Navbar"
import Sidebar from "./componentes/Sidebar"
import Inicio from "./componentes/Inicio"
import Discografia from "./componentes/Discografia"

function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Inicio/>
      <Discografia/>
    </>
  )
}

export default App