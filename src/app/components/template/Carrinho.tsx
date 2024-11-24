import React from 'react'
import Link from 'next/link'
import { IconShoppingCart } from '@tabler/icons-react'

export default function Carrinho() {
      return (
            <Link href="/carrinho">
                  <div className='flex items-center relative'>
                        <IconShoppingCart size={32} stroke={1} />
                        <div
                              className="
                                    absolute -top-2.5 -right-2.5 w-6 h-6 bg-red-500 rounded-full
                                    flex justify-center items-center text-xs
                              "
                        >
                              99
                        </div>
                  </div>
            </Link>
      )
}