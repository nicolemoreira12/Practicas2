<template>
  <div class="paquete-detalle-container">
    <h2 class="paquete-detalle-titulo">Detalles del paquete</h2>
    <img
      :src="paqueteActual.imagen"
      :alt="paqueteActual.nombre"
      class="paquete-detalle-img"
    />
    <h3 class="paquete-detalle-nombre">{{ paqueteActual.nombre }}</h3>
    <p class="paquete-detalle-desc">
      {{ paqueteActual.descripcion }}
    </p>
    <div class="paquete-detalle-info">
      <div class="paquete-detalle-item hotel-item">
        <div class="detalle-titulo">Hotel</div>
        <div class="detalle-contenido">
          <img :src="paqueteActual.hotelImg" alt="Hotel" class="hotel-img" />
          <span>{{ paqueteActual.hotel }}</span>
        </div>
      </div>
      <div class="paquete-detalle-item">
        <div class="detalle-titulo">Tour</div>
        <div class="detalle-contenido">
          <span>{{ paqueteActual.tour }}</span>
        </div>
      </div>
      <div class="paquete-detalle-item">
        <div class="detalle-titulo">Transporte</div>
        <div class="detalle-contenido">
          <span>{{ paqueteActual.transporte }}</span>
        </div>
      </div>
      <div class="paquete-detalle-item">
        <div class="detalle-titulo">Personas</div>
        <div class="detalle-contenido">
          <span>{{ paqueteActual.personas }}</span>
        </div>
      </div>
    </div>
    <button class="btn-reservar" @click="abrirFormulario">Reservar ahora</button>

    <div v-if="mostrarFormulario" class="formulario-reserva">
      <h3>Formulario de Reserva</h3>
      <label for="paquete">Selecciona un paquete:</label>
      <select
        id="paquete"
        v-model="paqueteSeleccionado"
        class="select-paquete"
      >
  <option value="">-- Selecciona un paquete --</option>
  <option v-for="(paquete, idx) in paquetes" :key="paquete.nombre" :value="idx">{{ paquete.nombre }}</option>
      </select>
      <button @click="reservarPaquete" class="btn-confirmar">
        Confirmar Reserva
      </button>
      <button @click="mostrarFormulario = false" class="btn-cancelar">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const mostrarFormulario = ref(false);
const paqueteSeleccionado = ref('');

const paquetes = [
  {
    nombre: 'Escapada de lujo a la playa',
    descripcion: 'Disfruta de una estancia de lujo en un sector de la playa exclusiva, con hotel premium, tours y actividades para relajarte y divertirte.',
    imagen: '/src/assets/img/playa.jpeg',
    hotel: 'Resort Premium Azul',
    hotelImg: '/src/assets/img/hotel.paraiso.jpeg',
    tour: 'Tour en catamarán en grupo y visita a ruinas mayas',
    transporte: 'Traslado aeropuerto-hotel, alquiler de auto',
    personas: '2 adultos, 2 niños',
  },
  {
    nombre: 'Aventura en la montaña',
    descripcion: 'Vive la emoción de la montaña con excursiones, hospedaje y actividades extremas.',
    imagen: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    hotel: 'Mountain Lodge',
    hotelImg: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=40&q=80',
    tour: 'Senderismo y escalada',
    transporte: 'Transporte 4x4 incluido',
    personas: '4 adultos',
  },
  {
    nombre: 'Tour cultural por la ciudad',
    descripcion: 'Descubre la historia y cultura de la ciudad con guías expertos y visitas a museos.',
    imagen: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
    hotel: 'Hotel Centro Histórico',
    hotelImg: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=40&q=80',
    tour: 'Museos y monumentos',
    transporte: 'Transporte público incluido',
    personas: '2 adultos',
  },
  {
    nombre: 'Relax en el spa',
    descripcion: 'Relájate en un spa de lujo con tratamientos exclusivos y ambiente tranquilo.',
    imagen: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    hotel: 'Spa Resort',
    hotelImg: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=40&q=80',
    tour: 'Masajes y terapias',
    transporte: 'Traslado privado',
    personas: '1 adulto',
  },
];

const paqueteActual = ref(paquetes[0]);

function abrirFormulario() {
  mostrarFormulario.value = true;
}

function reservarPaquete() {
  const idx = Number(paqueteSeleccionado.value);
  if (!isNaN(idx) && paquetes[idx]) {
    paqueteActual.value = paquetes[idx];
    mostrarFormulario.value = false;
    paqueteSeleccionado.value = '';
  }
}
</script>

<style scoped>
.hotel-img {
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(99,102,241,0.10);
  border: 2px solid #e0e7ff;
  margin-right: 0.7rem;
}
.detalle-titulo {
  font-weight: 700;
  /* Solo reglas CSS aquí */
      </select>
      <button class="btn-confirmar" @click="reservarPaquete" :disabled="!paqueteSeleccionado">Confirmar reserva</button>
      <button class="btn-cancelar" @click="mostrarFormulario = false">Cancelar</button>
    </div>
    padding: 1.2rem 0.5rem 1.2rem 0.5rem;
    max-width: 98vw;
  }
  .paquete-detalle-img {
    max-width: 98vw;
    aspect-ratio: 16/10;
  }
  .paquete-detalle-titulo {
    font-size: 1.1rem;
  }
  .paquete-detalle-nombre {
    font-size: 1.1rem;
  }
  .btn-reservar {
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }
}
.paquete-detalle-nombre {
  font-size: 1.25rem;
  font-weight: 700;
  color: #3730a3;
  margin-bottom: 0.7rem;
  text-align: left;
  width: 100%;
  letter-spacing: 0.02em;
}
.paquete-detalle-desc {
  color: #444;
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
  text-align: left;
  width: 100%;
  line-height: 1.6;
  letter-spacing: 0.01em;
}
.paquete-detalle-info {
  width: 100%;
  margin-bottom: 1.4rem;
  text-align: left;
}
.paquete-detalle-item {
  margin-bottom: 1rem;
  background: #e0e7ff;
  border-radius: 12px;
  padding: 0.7rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 1.5;
  min-width: 220px;
}
.btn-reservar {
  background: linear-gradient(90deg, #6366f1 60%, #3730a3 100%);
  color: #fff;
  border: none;
  padding: 0.8rem 2.2rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.08rem;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(99,102,241,0.08);
  margin-top: 1.2rem;
  width: 100%;
  max-width: 340px;
}
.btn-reservar:hover {
  background: linear-gradient(90deg, #3730a3 60%, #6366f1 100%);
  box-shadow: 0 4px 16px rgba(99,102,241,0.13);
}
.formulario-reserva {
  background: #f9fafb;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 8px rgba(99,102,241,0.1);
  margin-top: 1.5rem;
  width: 100%;
  max-width: 380px;
  text-align: left;
}
h3 {
  font-size: 1.2rem;
  color: #3730a3;
  margin-bottom: 1rem;
}
label {
  font-weight: 500;
  color: #333;
  margin-bottom: 0.5rem;
  display: block;
}
.select-paquete {
  width: 100%;
  padding: 0.7rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: #fff;
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
}
.btn-confirmar {
  background: #4caf50;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
}
.btn-confirmar:hover {
  background: #388e3c;
}
.btn-cancelar {
  background: #f44336;
  color: #fff;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
  margin-top: 0.5rem;
}
.btn-cancelar:hover {
  background: #c62828;
}
@media (max-width: 600px) {
  .paquete-detalle-container {
    padding: 1.2rem 0.5rem 1.2rem 0.5rem;
    max-width: 98vw;
  }
  .paquete-detalle-img {
    max-width: 98vw;
    height: 140px;
  }
  .paquete-detalle-titulo {
    font-size: 1rem;
  }
  .paquete-detalle-nombre {
    font-size: 1rem;
  }
  .btn-reservar {
    font-size: 1rem;
    padding: 0.7rem 1.2rem;
  }
}
</style>
