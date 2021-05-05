import { POST, DELETE } from "./ApiFetch"

export const sendFriendRequest = (sender, receiver) => {
  return POST(`/users/${sender}/friend_requests`, {receiver: receiver})
}

export const cancelFriendRequest = (user, id) => {
  return DELETE(`/users/${user}/friend_requests/${id}`)
}

export const acceptFriendRequest = (user, friendRequest) => {
  return DELETE(`/users/${user}/friend_requests/accept`, {friend_request: friendRequest})
}