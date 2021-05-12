import { POST } from "./ApiFetch"

export const postSubmission = (userId, songs, inviteId) => {
  return POST(`/users/${userId}/playlist_invites/${inviteId}/submissions`, { songs: songs })
}