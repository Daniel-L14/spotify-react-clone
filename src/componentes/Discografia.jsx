import React, { useState } from "react";
import "./Discografia.css";

const Discografia = () => {
  const [activeTab, setActiveTab] = useState("populares");

  const discos = [
    { titulo: "Escúchame", año: 2011, tipo: "Álbum", portada: "https://cdn-images.dzcdn.net/images/cover/8174d041ef097f531daf43bd6646ff3c/1900x1900-000000-80-0-0.jpg" },
    { titulo: "Disculpa La Espera", año: 2020, tipo: "Álbum", portada: "https://cdn-images.dzcdn.net/images/cover/b838243ed467dc8d6df77464a9fcc449/1900x1900-000000-81-0-0.jpg" },
    { titulo: "Dile Que Vuelva", año: 2011, tipo: "Álbum", portada: "https://m.media-amazon.com/images/I/61tBXzf7QHL._UXNaN_FMjpg_QL85_.jpg" },
    { titulo: "Tu No La Conoces Bien", año: 2015, tipo: "Sencillo", portada: "https://cdn-images.dzcdn.net/images/cover/fa4a64698bd424e9c2827346b3bfea98/0x1900-000000-80-0-0.jpg" },
    { titulo: "Junto a Ti", año: 2016, tipo: "EP", portada: "https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/ab/4c/24/ab4c24d3-85a9-a35b-c2c6-39aefa3b326e/190394830267.jpg/600x600bf-60.jpg" }
  ];

  return (
    <>
      {/* Sección Discografía */}
      <section className="discografia">
        <h2 className="titulo-seccion">Discografía</h2>
        <div className="tabs">
          <button 
            className={activeTab === "populares" ? "active" : ""} 
            onClick={() => setActiveTab("populares")}
          >
            Títulos populares
          </button>
          <button 
            className={activeTab === "albumes" ? "active" : ""} 
            onClick={() => setActiveTab("albumes")}
          >
            Álbumes
          </button>
          <button 
            className={activeTab === "sencillos" ? "active" : ""} 
            onClick={() => setActiveTab("sencillos")}
          >
            Sencillos y EP
          </button>
        </div>

        {activeTab === "populares" && (
          <div className="portadas-resumidas">
            {discos.map((disco, index) => (
              <div key={index} className="card-disco">
                <div className="imagen-container">
                  <img src={disco.portada} alt={disco.titulo} />
                  <div className="overlay">
                    <span className="play-icon"></span>
                  </div>
                </div>
                <h3>{disco.titulo}</h3>
                <p>{disco.año} · {disco.tipo}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "albumes" && (
          <div className="portadas-resumidas">
            {discos.filter(d => d.tipo === "Álbum").map((disco, index) => (
              <div key={index} className="card-disco">
                <div className="imagen-container">
                  <img src={disco.portada} alt={disco.titulo} />
                  <div className="overlay">
                    <span className="play-icon"></span>
                  </div>
                </div>
                <h3>{disco.titulo}</h3>
                <p>{disco.año} · {disco.tipo}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "sencillos" && (
          <div className="portadas-resumidas">
            {discos.filter(d => d.tipo !== "Álbum").map((disco, index) => (
              <div key={index} className="card-disco">
                <div className="imagen-container">
                  <img src={disco.portada} alt={disco.titulo} />
                  <div className="overlay">
                    <span className="play-icon"></span>
                  </div>
                </div>
                <h3>{disco.titulo}</h3>
                <p>{disco.año} · {disco.tipo}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Sección Incluye a Inicio */}
      <section className="incluye-inicio">
        <h2 className="titulo-seccion">Incluye a Inicio</h2>
        <div className="portadas-resumidas">
          <div className="card-disco">
            <div className="imagen-container">
              <img 
                src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/13Aw4kvMgRhqQQndVGx9dc/en" 
                alt="Radio de Inicio" 
              />
              <div className="overlay">
                <span className="play-icon"></span>
              </div>
            </div>
            <h3>Radio de Inicio</h3>
            <p>Con Rojo Tabaco</p>
            <p>Riezgo956, Magno y más</p>
          </div>
        </div>
      </section>

      {/* Sección Informacion*/}
      <section className="informacion">
        <h2 className="titulo-seccion">Información</h2>
        <div className="portadas-resumidas">
          <div className="card-disco">
            <div className="imagen-container">
              <img 
                src="https://scontent-bog2-1.xx.fbcdn.net/v/t1.6435-9/119198435_3196589323787212_623852024896933617_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=06a7ca&_nc_ohc=kqII79KxaccQ7kNvwGBrjwf&_nc_oc=Adm_ydGv06jdoUOuEic9tHO0fmwxVFfZ4ZrneOyKFyoLHfxg7rgWXlPzllBmwSLVqfY&_nc_zt=23&_nc_ht=scontent-bog2-1.xx&_nc_gid=9K3xLD-y-AizMfFVrrlEeg&_nc_ss=8&oh=00_AfzXnZxqc7GueCPjGNCxLJoZx7E54ti41e_x9x8FXN1w2g&oe=69D5E029" 
                alt="Informacion" 
              />
              {/* Texto dentro de la imagen */}
              <div className="texto-en-imagen">
                7146 oyentes mensuales
              </div>
            </div>
            <p className="descripcion">
            En la ciudad de Houston, Texas y contando con la colaboración de varios amigos, 
            tres hermanos empezaron a poner su sello musical en los oídos del público. La...
          </p>
          </div>
        </div>
      </section>

      {/* Sección Descubrir */}
      <section className="descubrir">
        <h2 className="titulo-seccion">Dónde se le puede descubrir</h2>
        <div className="portadas-resumidas">
          <div className="card-disco">
            <div className="imagen-container">
              <img src="https://mosaic.scdn.co/640/ab67616d00001e02614a2780e769e8941a89a47cab67616d00001e02bcf934479fe3f6673f4b1e82ab67616d00001e02c5ea9db967561a4093688e70ab67616d00001e02f7f117cb349340afc17f5990" alt="RGV JaMMz" />
              <div className="overlay">
                <span className="play-icon"></span>
              </div>
            </div>
          <h3>RGV JaMMz</h3>
        <p>De Mario Santos</p>
          </div>
        <div className="card-disco">
          <div className="imagen-container">
            <img src="https://mosaic.scdn.co/300/ab67616d00001e0294a79f8dd7e23febd097d078ab67616d00001e02b0a6a73a02e5b7567abcaf7cab67616d00001e02ce9756cbc9333f0f3a45b332ab67616d00001e02d65349dc0f3e5708f0c38d0b" alt="Norteñas Lights" />
              <div className="overlay">
                  <span className="play-icon"></span>
                </div>
              </div>
            <h3>Norteñas Lights</h3>
            <p>De Isaac</p>
          </div>
          <div className="card-disco">
            <div className="imagen-container">
              <img src="https://mosaic.scdn.co/300/ab67616d00001e0204c84b693b2369d9ef570a12ab67616d00001e0243acbc37a870d1f02659e461ab67616d00001e025db4c3fbd6c896839053cb5dab67616d00001e02b17b789599c6dc55b51a323c" alt="Platos de segunda mesa" />
                <div className="overlay">
                <span className="play-icon"></span>
              </div>
            </div>
          <h3>Platos de segunda mesa con los Tigres del Norte</h3>
          <p>De Aleca</p>
        </div>
        <div className="card-disco">
          <div className="imagen-container">
            <img src="https://i.scdn.co/image/ab67616d0000b27393980977592454831d4bbf2d" alt="Tejano Norteño Light" />
            <div className="overlay">
              <span className="play-icon"></span>
              </div>
            </div>
          <h3>Tejano Norteño Light</h3>
          <p>Tejano Norteño Light by Checo Dj</p>
        </div>
        <div className="card-disco">
          <div className="imagen-container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBapR42HCz6wetB3Qwuk08Oh-nHAR4xatwBQ&s" alt="Puro acordeón, bajo sexto y sax" />
              <div className="overlay">
                <span className="play-icon"></span>
              </div>
            </div>
          <h3>Puro acordeón, bajo sexto y sax</h3>
          <p>De Omar Mndz</p>
        </div>
    </div>
  </section>

  {/* Sección Sus fans también escuchan */}
  <section className="artistas">
    <h2 className="titulo-seccion">Sus fans también escuchan</h2>
    <div className="portadas-resumidas">
      <div className="card-disco">
        <div className="imagen-container">
          <img 
            src="https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/0d/b4/d8/0db4d8a6-c6c4-63d9-7d16-8c02173b7e79/199891526291_cover.jpg/1200x630bb.jpg" 
            alt="Artista 1" 
            className="imagen-artista"
          />
          <div className="overlay">
            <span className="play-icon"></span>
          </div>
        </div>
        <h3>Lalo Ayala</h3>
        <p>Artista</p>
      </div>

      <div className="card-disco">
        <div className="imagen-container">
          <img 
            src="https://i.scdn.co/image/ab6761610000e5eb5a5b18fcf22acd0ec726389c" 
            alt="Artista 2" 
            className="imagen-artista"
          />
          <div className="overlay">
            <span className="play-icon"></span>
          </div>
        </div>
        <h3>Rojo Tabaco</h3>
        <p>Artista</p>
      </div>

      <div className="card-disco">
        <div className="imagen-container">
          <img 
            src="https://i.scdn.co/image/ab67616d0000b27349870020d586470e0b5835ee" 
            alt="Artista 3" 
            className="imagen-artista"
          />
          <div className="overlay">
            <span className="play-icon"></span>
          </div>
        </div>
        <h3>Grupo Enigma</h3>
        <p>Artista</p>
      </div>

      <div className="card-disco">
        <div className="imagen-container">
          <img 
            src="https://i.scdn.co/image/ab67616100005174d67714368e965891c5122812" 
            alt="Artista 4" 
            className="imagen-artista"
          />
          <div className="overlay">
            <span className="play-icon"></span>
          </div>
        </div>
        <h3>Impulso</h3>
        <p>Artista</p>
      </div>

      <div className="card-disco">
        <div className="imagen-container">
          <img 
            src="https://i.scdn.co/image/ab67616d00001e0202933843035b9b16ce3fa747" 
            alt="Artista 5" 
            className="imagen-artista"
          />
          <div className="overlay">
            <span className="play-icon"></span>
          </div>
        </div>
        <h3>Perseguidos</h3>
        <p>Artista</p>
      </div>
    </div>
  </section>

  {/* Sección Aparece en*/}
      <section className="apareceen">
        <h2 className="titulo-seccion">Aparece en</h2>
        <div className="portadas-resumidas">
          <div className="card-disco">
            <div className="imagen-container">
              <img 
                src="https://i.scdn.co/image/ab67616d00001e02d9be2b4d407d0f7957c1d568" 
                alt="Aparece en" 
              />
              <div className="overlay">
                <span className="play-icon"></span>
              </div>
            </div>
          <h3>MixTape Preview 3</h3>
          <p>2021 · Álbum</p>
          <p> </p>
          <p> </p>
          <p> </p>
        </div>
      </div>
    </section>
</>
);
};

export default Discografia;
