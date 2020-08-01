import React, { useState , useEffect} from 'react';
import {api} from '../../../config'
import BannerMain from '../../BannerMain'
import Carousel from '../../Carousel'
import MenuFooter from '../../MenuFooter'

function Home() {
  const [dataInitial , setDataInitial] = useState([])
  
  useEffect(()=> {
    api.get('categorias?_embed=videos').then(response => {
      setDataInitial(response.data)
    }).catch(err => {
      console.error(err)
    })
  }, [])
  
  return (
    
    <MenuFooter paddingAll={0}>
      { dataInitial.length === 0 && (<div>Loading...</div>) }

    { dataInitial.map((category , index) => {
      if(index === 0){
        return (
          <div key={category.id}>
          <BannerMain 
          videoTitle={category.videos[0].titulo}
          url={category.videos[0].url}
          videoDescription={category.videos[0].description}
          />
          <Carousel 
          ignoreFirstVideo
          category={category}
          />
          </div>
          )
        }
        
        return (
          <Carousel 
          key={category.id}
          category={category}
          />
          )
        }
        )
      }
      </MenuFooter>
      
      )
    }
    
    export default Home;
    