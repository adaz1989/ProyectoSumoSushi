import { writable } from 'svelte/store';

export interface Producto {
    IdProducto: number;
    Nombre: string;
    Precio: number;
    Descripcion: string;
    ImagenUrl: string;
    Etiquetas: string[]; 
    Cantidad: number;     
}

export const carrito = writable<Producto[]>([
    {
        IdProducto: 1,
        Nombre: "Sushi de Salmón",
        Precio: 5500,
        Descripcion: "Sushi de salmón fresco con arroz de calidad.",
        ImagenUrl: "img/Promo1.png",
        Etiquetas: [],
        Cantidad: 2
    },
    {
        IdProducto: 4,
        Nombre: "Ramen de Cerdo",
        Precio: 6000,
        Descripcion: "Sopa de ramen con cerdo, huevo y verduras.",
        ImagenUrl: "img/Promo1.png",
        Etiquetas: ["picante"],
        Cantidad: 1
    }
]);
