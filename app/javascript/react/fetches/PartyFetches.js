import { POST } from "./ApiFetch"

export const createParty = (userId, title, invites) => {
  return POST(`/users/${userId}/parties`, {title: title, invites: invites})
}