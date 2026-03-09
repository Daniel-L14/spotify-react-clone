import "./Inicio.css"
import { useState } from "react"

import foto1 from "../assets/prometo_amarte.png";
import foto2 from "../assets/disculpa_la_espera.png";
import foto3 from "../assets/tu_no_la_conoces_bien.png";

function Inicio() {

  const [activeSong, setActiveSong] = useState(3)
  const [verMas, setVerMas] = useState(false)

  const images = [foto1, foto2, foto3]

  const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)]
  }

  const songs = [
    {
      id: 1,
      title: "Prometo Amarte",
      plays: "237.419",
      time: "3:00",
      img: getRandomImage()
    },
    {
      id: 2,
      title: "Disculpa La Espera",
      plays: "62.687",
      time: "3:17",
      img: getRandomImage()
    },
    {
      id: 3,
      title: "Tu No La Conoces Bien (feat. Wences Romo)",
      plays: "170.726",
      time: "3:31",
      img: getRandomImage()
    },
    {
      id: 4,
      title: "Ahora Soy Yo",
      plays: "70.814",
      time: "3:26",
      img: getRandomImage()
    },
    {
      id: 5,
      title: "Te Fuiste De Aqui",
      plays: "37.102",
      time: "3:28",
      img: getRandomImage()
    },
    {
      id: 6,
      title: "Llegaste Tu",
      plays: "63.039",
      time: "3:13",
      img: getRandomImage()
    },
    {
      id: 7,
      title: "Duele Decirte Adios",
      plays: "44.581",
      time: "3:44",
      img: getRandomImage()
    },
    {
      id: 8,
      title: "Al Revés",
      plays: "63.416",
      time: "2:52",
      img: getRandomImage()
    },
    {
      id: 9,
      title: "Dame un Beso",
      plays: "99.389",
      time: "4:16",
      img: getRandomImage()
    },
    {
      id: 10,
      title: "Solo Tu",
      plays: "44.776",
      time: "3:05",
      img: getRandomImage()
    }
  ]

  const cancionesVisibles = verMas ? songs : songs.slice(0, 5)

  return (
    <div className="inicio">

      <div className="hero">
        <h1>Inicio</h1>
        <p>7146 oyentes mensuales</p>
      </div>

      <div className="controls">
        <button className="play">▶</button>
        <button className="seguir">Seguir</button>
        <span className="dots">•••</span>
      </div>

      <h2 className="titulo">Populares</h2>

      <div className="songs">

        {cancionesVisibles.map((song) => (

          <div
            key={song.id}
            className={`song ${activeSong === song.id ? "active" : ""}`}
            onClick={() => setActiveSong(song.id)}
          >

            <span className="number">{song.id}</span>

            <div className="song-info">
              <img src={song.img} alt={song.title} />
              <p>{song.title}</p>
            </div>

            <span className="plays">{song.plays}</span>

            <span className="time">{song.time}</span>

          </div>

        ))}

      </div>

      <p
        className="ver-mas"
        onClick={() => setVerMas(!verMas)}
        style={{cursor:"pointer", marginTop:"20px"}}
      >
        {verMas ? "Mostrar menos" : "Ver más"}
      </p>

    </div>
  )
}

export default Inicio