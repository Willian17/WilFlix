import React, { useState, useEffect } from 'react';
import useForm from '../../../../hooks/useForm'
import { api } from '../../../../config'
import { Link } from 'react-router-dom';
import MenuFooter from '../../../MenuFooter';
import FormField from '../../../FormField';


export default function CadastroCategoria() {
  const initialValues = {
    name: '',
    describe: '',
    url: '#000',
  };
  const {clearForm,  handleChangeValues , values} = useForm(initialValues);
  
  
  const [listaCategorias, setListCategories] = useState([]);
  
  function handleAddCategoria(event) {
    event.preventDefault();
    setListCategories([...listaCategorias, values]);
    clearForm()
  } 
  
  
  useEffect(()=> {
    api.get('categorias').then(response =>{
      setListCategories([...response.data])
    })
  } , [])
  
  return (
    <MenuFooter>
    <h1>
    Cadastro Categoria:
    {values.name}
    </h1>
    
    <form onSubmit={handleAddCategoria}>
    
    <FormField
    label="Nome da categoria"
    type="text"
    name="name"
    onChange={handleChangeValues}
    value={values.name}
    />
    
    <FormField
    label="Descrição"
    type="textarea"
    name="describe"
    onChange={handleChangeValues}
    value={values.describe}
    />
    
    <FormField
    label="cor"
    type="color"
    name="color"
    onChange={handleChangeValues}
    value={values.color}
    />
    
    <button>
    Cadastrar
    </button>
    
    </form>
    
    {listaCategorias.map((category, indice) => (
      <li key={`${category.name}/${indice}`}>
      {category.titulo}
      </li>
      
      ))}
      
      <Link to="/">
      Voltar para a home
      </Link>
      
      </MenuFooter>
      );
    }
    