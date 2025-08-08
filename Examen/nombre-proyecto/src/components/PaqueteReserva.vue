<template>
  <div class="paquete-container">
    <div class="paquete-card">
      <h2>{{ paquete.nombre }}</h2>
      <img :src="getImageUrl(paquete.imagen)" alt="Imagen del paquete" class="paquete-img" />
      <p class="paquete-desc">{{ paquete.descripcion }}</p>
      <ul class="paquete-info">
        <li><strong>Hotel:</strong> {{ paquete.hospedaje }}</li>
        <li><strong>Tour:</strong> {{ paquete.tour }}</li>
        <li><strong>Transporte:</strong> {{ paquete.transporte }}</li>
        <li><strong>Personas:</strong> 2</li>
      </ul>
      <button class="btn-reservar">Reservar ahora</button>
    </div>
  </div>
</template>

<script setup>
import paqueteData from '../interfaces/destinos.json';
const paquete = paqueteData.paquetes[0];
function getImageUrl(img) {
  return new URL(`../assets/${img}`, import.meta.url).href;
}
</script>

<style scoped>
.paquete-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}
.paquete-card {
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(99,102,241,0.09);
  padding: 2rem;
  width: 400px;
  margin-bottom: 2rem;
  text-align: center;
}
.paquete-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1rem;
}
.paquete-desc {
  color: #6366f1;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}
.paquete-info {
  list-style: none;
  padding: 0;
  margin-bottom: 1.2rem;
}
.paquete-info li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
.btn-reservar {
  background: #6366f1;
  color: #fff;
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-reservar:hover {
  background: #3730a3;
}
</style>
