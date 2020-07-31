import React from 'react'
import MenuFooter from '../../../MenuFooter'

import {Link} from 'react-router-dom'

export default function CadastroCategoria(){
    return (
      <MenuFooter>
        <h1>Cadastro Categoria</h1>

        <Link to="/">
          Voltar para a home
        </Link>
        
      </MenuFooter>
    )
  }