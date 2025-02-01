export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  value: string
}

export type RegisterRequest = {
  email: string
  name: string
  age: number | null
  password: string
}

export type RegisterResponse = ''
