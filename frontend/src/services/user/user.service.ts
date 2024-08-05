import api from '../../http-common'

const create = async () => {
  const response = await api.post('user', {})
  return response.data
}

const userService = {
  create,
}

export default userService
