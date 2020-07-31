import React from 'react';
import Menu from '../../Menu'
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import Footer from '../../Footer';

import dadosIniciais from '../../../data/dados_iniciais.json'

function Home() {
  return (
    <div style={{background: '#141414'}}>
    <Menu />
    
    <BannerMain 
    videoTitle="Programei 4 robôs que criam vídeos para mim no YouTube"
    url="https://www.youtube.com/watch?v=kjhu1LEmRpY&t=15s"
    videoDescription="Misturei o Watson da IBM + Adobe After Effects + Wikipedia + Google Images API + Algorithmia + JavaScript + Node.js para criar 4 robôs que geram vídeos automáticos no YouTube."
    />
    
    { dadosIniciais.categorias.map(category => 
      (<Carousel category={category}/>))
    }
    <Footer />
    
    </div>
    );
  }
  
  export default Home;
  