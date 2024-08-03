import { createContext, ReactNode, useEffect, useState } from 'react'

import ProductService from '../services/product/product.service'

import { ProductProps } from '../interfaces/Product'

interface ProductContextType {
  products: ProductProps[] | null
  addProduct: (product: ProductProps) => void
}

export const ProductContext = createContext<ProductContextType>({
  products: null,
  addProduct: () => {},
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

  const addProduct = async (product: ProductProps) => {
    console.log('Product sent as body of POST: ', product)
    const new_product = await ProductService.create(product)

    console.log(
      'Product send back as response from API after POST: ',
      new_product,
    )
    setProducts((currentState) => {
      return [...currentState, new_product]
    })
  }

  useEffect(() => {
    console.log('ProductContext was mounted')
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
