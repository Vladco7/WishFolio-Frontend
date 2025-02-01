import { api } from "../api"
import type { LoginRequest, LoginResponse } from "./types"

export const login = async ({ email, password }: LoginRequest) : Promise<LoginResponse> => {
    const response = await api.post("/Authorization/login", { email, password })
    return response.data
}