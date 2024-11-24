import Logo from './Logo'
import React from 'react'
import Carrinho from './Carrinho'

export default function Cabecalho() {
      return (
            <header
                  className="
                        flex items-center justify-between
                        bg-zinc-800 h-20 px-10
                  "
            >
                  <Logo />
                  <Carrinho />
            </header>
      )
}