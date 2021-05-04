import { DELETE, POST } from "./Fetch"
import { GET } from "./ApiFetch"

export const login = (formPayload) => {
  return POST(`/users/sign_in`, {user: formPayload})
}

export const currentUser = () => {
  return GET(`/users/logged_in_user`)
}

export const logout = () => {
  return DELETE(`/users/sign_out`)
}