import http from '../../http-common'

import { ProductProps } from '../../interfaces/Product'

const findAll = async () => {
  const response = await http.get<ProductProps[]>('product')
  return response.data
}

const create = async (product: ProductProps) => {
  const response = await http.post<ProductProps>('/product', product)
  return response.data
}

const ProductService = {
  findAll,
  create,
}

export default ProductService
