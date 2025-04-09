<script lang="ts">
    import '../../lib/styles/global.css';
    import Encabezado from '../../lib/components/Encabezado.svelte';
    import MenuInferior from '../../lib/components/menuInferior.svelte';
  
    import { menu } from '../../stores/menu.js';
    import { get } from 'svelte/store';
  
    interface Categoria {
      NombreCategoria: string;
      Productos: {
        IdProducto: number;
        Nombre: string;
        Precio: number;
        Descripcion: string;
        ImagenUrl: string;
        Etiquetas: string[];
      }[];
    }
  
    let categorias: Categoria[] = get(menu);
  
    // Modal
    let mostrarModal = false;
    let categoriaSeleccionada: Categoria | null = null;
  
    function abrirModal(categoria: Categoria) {
      categoriaSeleccionada = categoria;
      mostrarModal = true;
    }
  
    function cerrarModal() {
      categoriaSeleccionada = null;
      mostrarModal = false;
    }
  </script>
  
  <Encabezado />
  
  <div class="contenedor-principal contenedor-principal--categorias">
    <section class="categorias">
      <table class="categorias__tabla">
        <thead class="categorias__cabecera">
          <tr>
            <th>Nombre</th>
            <th>Cantidad de productos</th>
          </tr>
        </thead>
        <tbody class="categorias__cuerpo">
          {#each categorias as categoria}
            <tr class="categorias__fila" on:click={() => abrirModal(categoria)}>
              <td>{categoria.NombreCategoria}</td>
              <td>{categoria.Productos.length}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </section>
  
    {#if mostrarModal}
      <div class="modal">
        <div class="modal__contenido">
          <h3>¿Qué desea hacer con "{categoriaSeleccionada?.NombreCategoria}"?</h3>
          <div class="modal__acciones">
            <button on:click={() => {/* lógica para editar */}}>Editar</button>
            <button on:click={() => {/* lógica para deshabilitar */}}>Deshabilitar</button>
            <button on:click={cerrarModal}>Cancelar</button>
          </div>
        </div>
      </div>
    {/if}
  </div>
  
  <MenuInferior />
  
  <style>
    .categorias__tabla {
      width: 100%;
      border-collapse: collapse;
    }
  
    .categorias__cabecera th {
      text-align: left;
      padding: 1rem;
      background-color: var(--color-fondo-secundario);
    }
  
    .categorias__cuerpo td {
      padding: 1rem;
      border-top: 1px solid #444;
    }
  
    .categorias__fila {
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    .categorias__fila:hover {
      background-color: #3d3d3d;
    }
  
    .modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  
    .modal__contenido {
      background: var(--color-fondo-secundario);
      padding: 2rem;
      border-radius: var(--border-radius);
      text-align: center;
    }
  
    .modal__acciones button {
      margin: 0 1rem;
    }
  </style>
  