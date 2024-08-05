import { createContext, ReactNode, useEffect, useState } from 'react'

import ProductService from '../services/product/product.service'

import { ProductProps } from '../interfaces/Product'

interface ProductContextType {
  products: ProductProps[] | null
}

export const ProductContext = createContext<ProductContextType>({
  products: null,
})

interface ProductContextProviderProps {
  children: ReactNode
}

export const ProductContextProvider = (props: ProductContextProviderProps) => {
  const { children } = props

  const [products, setProducts] = useState<ProductProps[]>([])

  const fetchProducts = async () => {
    const data = await ProductService.findAll()
    console.log(data)
    setProducts([...data])
  }

  useEffect(() => {
    console.log('ProductContext was mounted')
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
