import { GET, DELETE } from "./ApiFetch"

export const fetchFriends = (userId) => {
  return GET(`/users/${userId}/friendships`)
}

export const deleteFriendship = (userId, friendshipId) => {
  return DELETE(`/users/${userId}/friendships/${friendshipId}`)
}