import { POST, DELETE } from "./ApiFetch"

export const sendFriendRequest = (userId, currentUserId) => {
  return POST(`/users/${currentUserId}/friend_requests`, {userId: userId})
}

export const cancelFriendRequest = (userId, requestId) => {
  return DELETE(`/users/${userId}/friend_requests/${requestId}`)
}

export const acceptFriendRequest = (userId, requestId) => {
  return DELETE(`/api/v1/users/${userId}/friend_requests/accept`, {requestId: requestId})
}