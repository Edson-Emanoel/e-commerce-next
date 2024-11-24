import Image from "next/image";
import Produto from "@/app/data/model/Produto";

export interface CartaoProdutoProps {
      produto: Produto
}

export default function CartaoProduto(props: CartaoProdutoProps) {
      const { id, nome, descricao, preco, imagem } = props.produto

      return (
            <div className="flex flex-col w-72" key={id}>
                  <div className="relative w-72 h-52">
                        <Image src={imagem} alt={nome} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                        <h2 className="text-xl font-bold">{nome}</h2>
                        <p className="text-sm text-zinc-400">{descricao}</p>
                        <p className="text-lg font-semibold mt-2">R$ {preco}</p>
                        <button className="bg-transparent rounded-md bg-zinc-600 px-5">Adicionar</button>
                  </div>
            </div>
      )
}