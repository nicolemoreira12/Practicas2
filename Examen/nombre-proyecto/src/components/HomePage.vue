<template>
  <div class="home-container">
    <div class="paquete-card">
      <div class="paquete-detalles">
        <ul class="paquete-info">
          <li><strong>Hotel:</strong> {{ paquete.hospedaje }}</li>
          <li><strong>Tour:</strong> {{ paquete.tour }}</li>
          <li><strong>Transporte:</strong> {{ paquete.transporte }}</li>
          <li><strong>Personas:</strong> 2</li>
        </ul>
      </div>
      <img :src="getImageUrl(paquete.imagen)" alt="Imagen del paquete" class="paquete-img" />
      <div class="paquete-nombre">{{ paquete.nombre }}</div>
      <p class="paquete-desc">{{ paquete.descripcion }}</p>
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

<style src="../assets/HomePage.css" scoped></style>
