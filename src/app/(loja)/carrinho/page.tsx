'use client'

import useCarrinho from "@/app/data/hooks/useCarrinho";
import Pagina from "../../components/template/Pagina";
import AreaItemCarrinho from "@/app/components/carrinho/AreaItemCarrinho";
import CarrinhoVazio from "@/app/components/carrinho/CarrinhoVazio";
import TotalCarrinho from "@/app/components/carrinho/TotalCarrinho";

export default function PaginaCarrinho(){
      const {itens, adicionar, remover } = useCarrinho();

      return <Pagina className="flex flex-col gap-10">
            {itens.length === 0 ? (
                  <CarrinhoVazio />
            ): (
                  <>
                        <div className="w-[100%] flex flex-col items-center gap-5">
                              {itens.map((item) => (
                                    <AreaItemCarrinho
                                          key={item.produto.id}
                                          item={item} 
                                          adicionar={(item) => adicionar(item.produto)}
                                          remover={(item) => remover(item.produto)}
                                    /> 
                              ))}
                        </div>

                        <TotalCarrinho itens={itens} />
                  </>
            )}
      </Pagina>
}