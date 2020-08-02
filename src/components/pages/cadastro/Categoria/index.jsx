import React from 'react';
import useForm from '../../../../hooks/useForm'
import { api } from '../../../../config'
import { Link, useHistory } from 'react-router-dom';
import MenuFooter from '../../../MenuFooter';
import FormField from '../../../FormField';


export default function CadastroCategoria() {
  const history = useHistory()
  const initialValues = {
    name: '',
    describe: '',
    color: '#000',
  };
  const {clearForm,  handleChangeValues , values} = useForm(initialValues);
  
  
  function handleAddCategoria(event) {
    event.preventDefault();
    api.post('categorias' , {
      titulo: values.name,
      cor: values.color
    }).then(()=> {
      clearForm();
      history.push('/')
    })
  } 
  
  
  
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
      
      <Link to="/">
      Voltar para a home
      </Link>
      
      </MenuFooter>
      );
    }
    