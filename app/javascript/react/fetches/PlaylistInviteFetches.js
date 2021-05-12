import { DELETE } from "./ApiFetch"

export const acceptPlaylistInvite = (userId, inviteId) => {
  return DELETE(`/users/${userId}/playlist_invites/accept`, {invite_id: inviteId})
}

export const declinePlaylistInvite = (userId, inviteId) => {
  return DELETE(`/users/${userId}/playlist_invites/${inviteId}`)
}