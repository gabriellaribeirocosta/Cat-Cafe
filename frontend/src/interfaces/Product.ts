export interface ProductProps {
  id: number
  name: string
  description: string
  price: number
  category: string
  createdAt: string
}

export interface Product {
  item: ProductProps
}
