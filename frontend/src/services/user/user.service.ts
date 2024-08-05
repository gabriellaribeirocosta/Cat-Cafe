import api from '../../http-common'

const create = async () => {
  const response = await api.post('user', {})
  return response.data
}

const user = {
  create,
}

export default user
