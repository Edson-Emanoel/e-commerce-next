'use client'

import useCarrinho from "@/app/data/hooks/useCarrinho";
import Pagina from "../../components/template/Pagina";
import AreaItemCarrinho from "@/app/components/carrinho/AreaItemCarrinho";

export default function PaginaCarrinho(){
      const {itens, adicionar } = useCarrinho();

      return <Pagina>
            <div className="flex flex-col items-center gap-5">
                  {itens.map((item) => (
                        <AreaItemCarrinho
                              key={item.produto.id}
                              item={item} 
                              adicionar={(item) => adicionar(item.produto)}
                        /> 
                  ))}
            </div>
      </Pagina>
}