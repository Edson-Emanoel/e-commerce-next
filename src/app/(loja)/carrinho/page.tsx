'use client'
import Pagina from "../../components/template/Pagina";
import useCarrinho from "@/app/data/hooks/useCarrinho";

export default function PaginaCarrinho(){
      const { numero } = useCarrinho()

      return <Pagina> Carrinho: { numero } </Pagina>
}