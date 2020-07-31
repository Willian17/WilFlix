  import React, {useState} from 'react'
  import MenuFooter from '../../../MenuFooter'
  import FormField from '../../../FormField'
  import {Link} from 'react-router-dom'
  
  export default function CadastroCategoria(){
    const initialValues = {
      name: '',
      describe: '',
      color: '#000'
    }
    
    const [values , setValues] = useState(initialValues)
    const [listaCategorias , setlistaCategorias] = useState([])
    
    
    function handleAddCategoria(event){
      event.preventDefault()
      setlistaCategorias([...listaCategorias, values])
      setValues(initialValues)
    }
    
    function setValue(chave , valor){
      setValues({...values, [chave]: valor})
    }
    
    function handleChangeValues(event){
      setValue(
        event.target.getAttribute('name'),
        event.target.value
        )
      }
      
      return (
        <MenuFooter>
        <h1>Cadastro Categoria: {values.name}</h1>
        
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
        
        {listaCategorias.map((categoria, indice) => (
          <li key={`${categoria.name}/${indice}`}>
          {categoria.name} / {categoria.describe} / {categoria.color}
          </li>
          
          ))}
          
          <Link to="/">
          Voltar para a home
          </Link>
          
          </MenuFooter>
          )
        }