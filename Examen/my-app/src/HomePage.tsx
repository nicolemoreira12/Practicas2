import React, { useState } from "react";
import type { Destinos } from "./interfaces/destinos";
import type { categorias } from "./interfaces/categorias";
import destinosData from "./interfaces/destinos.json";
import "./HomePage.css";

const categoriasObj: categorias = destinosData.categorias;
const destinos: Destinos[] = destinosData.destinos;

export default function HomePage() {
  const [busqueda, setBusqueda] = useState("");
  const [vista, setVista] = useState("inicio");

  const destinosFiltrados = destinos.filter(destino =>
    destino.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="home-container">
      <nav className="navbar">
        <button onClick={() => setVista("inicio")}>Inicio</button>
        <button onClick={() => setVista("buscar")}>Buscar</button>
        <button onClick={() => setVista("viajes")}>Mis Viajes</button>
        <button onClick={() => setVista("perfil")}>Perfil</button>
      </nav>
      {vista === "inicio" && (
        <>
          <h1>Explora destinos populares</h1>
          <input
            type="text"
            placeholder="Buscar destino..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            className="buscador"
          />
          <section className="categorias">
            <h2>Categorías</h2>
            <div className="categorias-list">
              {Object.entries(categoriasObj).map(([cat, items]) => (
                <div className="categoria-item" key={cat}>
                  <span className="categoria-nombre">{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                  <div className="categoria-tooltip">
                    {items.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="destinos">
            <h2>Destinos más populares</h2>
            <div className="destinos-list">
              {destinosFiltrados.map(destino => (
                <div key={destino.nombre} className="destino-card">
                  <img src={"/src/assets/" + destino.imagen} alt={destino.nombre} className="destino-img" />
                  <h3>{destino.nombre}</h3>
                  {destino.categorias && destino.categorias.length > 0 && (
                    <span className="destino-categoria">{destino.categorias[0]}</span>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}
      {vista === "buscar" && (
        <div className="seccion-buscar">
          <h1>Buscar destinos</h1>
          <input
            type="text"
            placeholder="Buscar destino..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            className="buscador"
          />
          <div className="destinos-list">
            {destinosFiltrados.map(destino => (
              <div key={destino.nombre} className="destino-card">
                <img src={"/src/assets/" + destino.imagen} alt={destino.nombre} className="destino-img" />
                <h3>{destino.nombre}</h3>
                {destino.categorias && destino.categorias.length > 0 && (
                  <span className="destino-categoria">{destino.categorias[0]}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {vista === "viajes" && (
        <div className="seccion-viajes">
          <h1>Mis Viajes</h1>
          <p>Aquí aparecerán tus viajes reservados.</p>
        </div>
      )}
      {vista === "perfil" && (
        <div className="seccion-perfil">
          <h1>Mi Perfil</h1>
          <div className="perfil-card">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Foto de perfil"
              className="perfil-img"
            />
            <div className="perfil-info">
              <h2 className="perfil-nombre">Ana Martínez <span className="perfil-nivel">🌟 Gold</span></h2>
              <p><strong>Email:</strong> ana.martinez@email.com</p>
              <p><strong>Teléfono:</strong> +52 55 9876 5432</p>
              <p><strong>Paquetes reservados:</strong> 5</p>
              <p><strong>Miembro desde:</strong> Marzo 2023</p>
              <p><strong>Preferencias:</strong> Playa, Cultura, Spa</p>
              <div className="perfil-redes">
                <a href="#" title="Instagram" className="red-icon instagram">IG</a>
                <a href="#" title="Facebook" className="red-icon facebook">FB</a>
                <a href="#" title="Twitter" className="red-icon twitter">TW</a>
              </div>
              <button className="btn-editar">Editar perfil</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}