import Image from "next/image";
import Produto from "@/app/data/model/Produto";
import useCarrinho from "@/app/data/hooks/useCarrinho";

export interface CartaoProdutoProps {
      produto: Produto
}

export default function CartaoProduto(props: CartaoProdutoProps) {
      const { adicionar } = useCarrinho();
      const { id, nome, descricao, preco, imagem } = props.produto

      return (
            <div className="flex flex-col w-72 bg-zinc-800 rounded-lg">
                  <div className="relative w-72 h-44">
                        <Image src={imagem} alt={nome} fill className="object-cover rounded-t-lg" />
                  </div>
                  <div className="flex-1 flex flex-col gap-4 p-5">
                        <h2 className="text-xl font-bold">{nome}</h2>
                        <p className="flex-1 text-sm text-zinc-400">{descricao}</p>

                        <div className="flex justify-between items-center">
                              <span className="text-lg font-semibold mt-2">R$ {preco.toFixed(2)}</span>
                              <button
                                    onClick={() => adicionar(props.produto)}
                                    className="border rounded-full px-5 py-1 text-sm"
                              >
                                    Adicionar
                              </button>
                        </div>
                  </div>
            </div>
      )
}