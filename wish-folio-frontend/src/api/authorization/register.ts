import { api } from '../api'
import type { RegisterRequest, RegisterResponse } from './types'

export const register = async ({
  email,
  password,
  name,
  age,
}: RegisterRequest): Promise<RegisterResponse> => {
  const response = await api.post('/Authorization/register', { email, password, name, age })
  return response.data
}
