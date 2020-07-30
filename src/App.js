import React from 'react';
import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer';

import dadosIniciais from './data/dados_iniciais.json'

function App() {
  return (
    <div style={{background: '#141414'}}>
    <Menu />
    
    <BannerMain 
    videoTitle="Programei 4 robôs que criam vídeos para mim no YouTube"
    url="https://www.youtube.com/watch?v=kjhu1LEmRpY&t=15s"
    videoDescription="Misturei o Watson da IBM + Adobe After Effects + Wikipedia + Google Images API + Algorithmia + JavaScript + Node.js para criar 4 robôs que geram vídeos automáticos no YouTube."
    />

    {dadosIniciais.categorias.map(category => 
      (<Carousel category={category}/>))
    }
    <Footer />
    
    </div>
    );
  }
  
  export default App;
  