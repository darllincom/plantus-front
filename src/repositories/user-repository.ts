import { api } from "../api/base";

export class UserRepository {
  static async fetchProfile(id: string) {
    const res = await api.get(`/users/${id}`)

    return res
  }
}