import api from '../../http-common'

const totalProduct = async () => {
  const response = await api.get('get-total/product')
  return response.data
}

const totalService = {
  totalProduct,
}

export default totalService
