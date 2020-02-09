import React, { createContext, useState, useEffect } from 'react'
import Axios from 'axios';

//crear el context
export const CategoriasContext= createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider= (props)=>{

  //crear el state del context
  const [categorias, guardarCategorias]= useState([]); 

  //Ejecutar el llamada a la api
  useEffect(()=>{
      const obtenerCategorias= async() => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const categorias= await Axios.get(url);
        guardarCategorias(categorias.data.drinks)
      }
      obtenerCategorias();
  }, [])

  return( //A: lo que va a estar disponible para los que consuman este context
    <CategoriasContext.Provider
      value={{
        categorias
      }}
    >
      {props.children}
    </CategoriasContext.Provider>

  )
}

export default CategoriasProvider