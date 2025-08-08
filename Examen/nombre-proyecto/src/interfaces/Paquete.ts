export interface Paquete {
  nombre: string;
  descripcion: string;
  precio: number;
  destinos: string[];
  transporte: string;
  hospedaje: string;
  tour: string;
  imagen?: string;
}
