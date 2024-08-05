import {
  createContext,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react'

import ProductService from '../services/product/product.service'

import { ProductProps } from '../interfaces/Product'

interface ProductContextType {
  products: ProductProps[] | null
  setProducts: React.Dispatch<SetStateAction<ProductProps[]>>
  addProduct: (product: ProductProps) => void
}

export const ProductContext = createContext<ProductContextType>({
  products: null,
  addProduct: () => {},
  setProducts: () => {},
})

interface ProductContextProviderProps {
  children: ReactNode
}

export const ProductContextProvider = (props: ProductContextProviderProps) => {
  const { children } = props

  const [products, setProducts] = useState<ProductProps[]>([])

  const fetchProducts = async () => {
    const data = await ProductService.findAll()
    setProducts([...data])
  }

  const addProduct = async (product: ProductProps) => {
    const newProduct = await ProductService.create(product)
    setProducts((currentState) => {
      return [...currentState, newProduct]
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
