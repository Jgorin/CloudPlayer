import { DELETE } from "./ApiFetch"

export const acceptPartyInvite = (userId, inviteId) => {
  return DELETE(`/users/${userId}/party_invites/accept`, {invite_id: inviteId})
}

export const declinePartyInvite = (userId, inviteId) => {
  return DELETE(`/users/${userId}/party_invites/${inviteId}`)
}