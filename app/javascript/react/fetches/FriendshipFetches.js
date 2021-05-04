import { GET } from "./ApiFetch"

export const fetchFriends = (userId) => {
  return GET(`/users/${userId}/friendships`)
}