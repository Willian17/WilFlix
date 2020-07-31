import React from 'react'
import MenuFooter from '../../../MenuFooter'

import {Link} from 'react-router-dom'

export default function CadastroVideo(){
    return (
      <MenuFooter>
        <h1>Cadastro Video</h1>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
        
      </MenuFooter>
    )
  }