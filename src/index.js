import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './components/pages/home';
import CadastroVideo from './components/pages/cadastro/Video'
import CadastroCategoria from './components/pages/cadastro/Categoria'

import {BrowserRouter , Switch , Route} from 'react-router-dom'



function Pagina204(){
  return (
    <h1>Pagina não encontrada erro 204!</h1>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo}  />
      <Route path="/cadastro/categoria" component={CadastroCategoria}  />
      <Route component={Pagina204}  />
    </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
