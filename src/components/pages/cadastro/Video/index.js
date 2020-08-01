import React, { useState, useEffect } from 'react';
import useForm from '../../../../hooks/useForm'
import { api } from '../../../../config'
import { Link , useHistory } from 'react-router-dom';
import MenuFooter from '../../../MenuFooter';
import FormField from '../../../FormField';


export default function CadastroVideo() {
  const [categories, setCategories] = useState([])
  const categoriesTitle = categories.map(({titulo}) => titulo)

  const history = useHistory()
  const initialValues = {
    title: '',
    url: '',
    category: '',
  };
  const {clearForm,  handleChangeValues , values} = useForm(initialValues);
  
  function handleAddVideo(event) {
    event.preventDefault();

    const chosenCategory = categories.find(category => {
     return category.titulo === values.category
    })

    if(chosenCategory){
      api.post('/videos/?_embed=videos' , {
        titulo: values.title,
        url: values.url,
        categoriaId: chosenCategory.id
      })
      .then(()=> {
        clearForm()
        history.push('/')
      })
      .catch (error => {
        console.log(error)
      })
    } else {
      alert('Erro!, escolha uma categoria existente')
    }
  } 

  useEffect(()=> {
    api.get('categorias').then(response => {
      setCategories(response.data)
    })
  }, [])
  
  
  return (
    <MenuFooter>
    <h1>
      Cadastro Video:
    </h1>
    
    <form onSubmit={handleAddVideo}>
    
    <FormField
    label="Titulo do vídeo"
    type="text"
    name="title"
    onChange={handleChangeValues}
    value={values.title}
    />
    
    <FormField
    label="URL"
    type="text"
    name="url"
    onChange={handleChangeValues}
    value={values.url}
    />
    
    <FormField
    label="Categoria"
    type="text"
    name="category"
    onChange={handleChangeValues}
    value={values.category}
    suggestions={categoriesTitle}
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
  