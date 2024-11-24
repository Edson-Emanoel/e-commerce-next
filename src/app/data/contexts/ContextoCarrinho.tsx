'use client'
import { createContext, useState } from "react"

interface ContextoCarrinhoProps {
      numero: number;
      incrementar?: () => void;
      decrementar?: () => void;
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>({} as any)

export function ProvedorCarrinho(props: any){
      const [numero, setNumero] = useState(1007)
      return <ContextoCarrinho.Provider
            value={{
                  numero,
                  incrementar: () => setNumero(numero + 1),
                  decrementar: () => setNumero(numero - 1),
            }}
      >
            {props.children}
      </ContextoCarrinho.Provider>
}

export default ContextoCarrinho