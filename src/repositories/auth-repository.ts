import { api } from "../api/base";

export class AuthRepository {
  static async handleSignIn(cpf: string, password: string) {
    const res = await api.post('/auth/signin', {
      cpf,
      password
    })

    return res
  }
}