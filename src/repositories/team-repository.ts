import { api } from "../api/base";

export class TeamRepository {
  static async getTeam(page: number) {
    const res = await api.get(`/team?pageSize=10&page=1`)

    return res
  }
}