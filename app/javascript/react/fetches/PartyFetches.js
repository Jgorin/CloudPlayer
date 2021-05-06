import { POST } from "./ApiFetch"

export const createParty = (userId, invites) => {
  return POST(`/users/${userId}/parties`, {invites: invites})
}