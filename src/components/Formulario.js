import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { RecetasContext } from '../context/RecetasContext';
//A: consumo el context import useContext y usando el CategoriasContext

function Formulario() {
  const [ busqueda, guardarBusqueda ]= useState({
    nombre: '',
    categoria: ''
  });

  const { categorias }= useContext(CategoriasContext);
  const { buscarRecetas } = useContext(RecetasContext);
  //A: extraigo categorias del state del context;

  const obtenerDatosRecetas= e =>{ //U: guarda los cambios del form en el state local
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form 
      className= "col-12" //toma todo el ancho posible
      onSubmit= { e=>{
        e.preventDefault();
        buscarRecetas(busqueda); //A: guardar en el RecetasContext el ingrediente y la categoria del trago
      }}
    > 
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoria o Ingrediente</legend>
      </fieldset>
      
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type= "text"
            placeholder="Buscar por Ingrediente"
            onChange= {obtenerDatosRecetas}
          />
        </div>
        {/*Input para ingresar ingrediente*/}
      
        <div className="col-md-4">
          <select
            className= "form-control"
            name= "categoria"
            onChange= {obtenerDatosRecetas}
          >
          <option value="">-- Seleccion Categoria</option>
          {categorias.map(categoria => (
              <option 
                key={categoria.strCategory}
                value={categoria.strCategory}
                //A: uso la categoria como key y value
              >
                {categoria.strCategory}
              </option>
            ))
          }
          </select>
        </div>
        {/*select para seleccion categoria , las opciones vienen de la api*/ }

        <div className="col-md-4">
          <input
            type= "submit"
            className= "btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  )
}

export default Formulario
