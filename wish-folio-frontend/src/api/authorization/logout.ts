import { api } from '../api'

export const logout = async (): Promise<null> => {
  const response = await api.post('/Authorization/logout')
  return response.data
}
