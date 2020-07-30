import React from 'react'
import Logo from '../../assets/logo.png'
import './Menu.css'
import Button from '../Button'
// import ButtonLink from '../ButtonLink'

export default function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="logo" />
            </a>

                <Button as="a" className="ButtonLink" href="/"> 
                    Novo Vídeo
                </Button>
            
        </nav>
    )
}