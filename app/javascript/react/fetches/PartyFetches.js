import { GET, POST } from "./ApiFetch"

export const createParty = (userId, title, invites) => {
  return POST(`/users/${userId}/parties`, {title: title, invites: invites})
}

export const fetchParty = (partyId) => {
  return GET(`/parties/${partyId}`)
}