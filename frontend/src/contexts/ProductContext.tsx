import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { AuthContext } from './AuthContext'

import ProductService from '../services/product/product.service'

import { ProductProps, ProductPropsWithUID } from '../interfaces/Product'

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

  const { user } = useContext(AuthContext)

  const [products, setProducts] = useState<ProductProps[]>([])

  const fetchProducts = async () => {
    const data = await ProductService.findAll()
    console.log(data)
    setProducts([...data])
  }

  const addProduct = async (product: ProductProps) => {
    if (!user?.uid) {
      console.log('A UID must be passed in order to a new product.')
      return
    }

    console.log('Product sent as body of POST: ', product)
    const productWithUID: ProductPropsWithUID = {
      ...product,
      user_id: user?.uid,
    }
    const new_product = await ProductService.create(productWithUID)

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
