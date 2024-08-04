export interface ProductProps {
  id?: number
  name: string
  description: string
  price: number
  category: string
}

export interface ProductPropsWithUID extends ProductProps {
  createdAt?: string
  user_id: string
}

export interface Product {
  item: ProductProps
}
