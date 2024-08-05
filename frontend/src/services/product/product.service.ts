import api from '../../http-common'

import { ProductProps } from '../../interfaces/Product'

const findAll = async () => {
  const response = await api.get<ProductProps[]>('product')
  return response.data
}

const create = async (product: ProductProps) => {
  const response = await api.post<ProductProps>('product', product)
  return response.data
}
const update = async (id: number, product: ProductProps) => {
  const response = await api.put<ProductProps>(`product/${id}`, product)
  return response.data
}

const deleteProduct = async (id: number) => {
  await api.delete(`product/${id}`)
}

export const ProductService = {
  findAll,
  create,
  update,
  deleteProduct,
}

export default ProductService
