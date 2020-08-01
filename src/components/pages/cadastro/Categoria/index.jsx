import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import MenuFooter from '../../../MenuFooter';
import FormField from '../../../FormField';


export default function CadastroCategoria() {
  const initialValues = {
    name: '',
    describe: '',
    color: '#000',
  };

  const [values, setValues] = useState(initialValues);
  const [listaCategorias, setListCategories] = useState([]);

  function handleAddCategoria(event) {
    event.preventDefault();
    setListCategories([...listaCategorias, values]);
    setValues(initialValues);
  }

  function setValue(chave, valor) {
    setValues({ ...values, [chave]: valor });
  }

  function handleChangeValues(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(()=> {
    const baseUrl = 'http://localhost:8080'
    axios.get(`${baseUrl}/categorias`).then(response =>{
      console.log(response.data)
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
