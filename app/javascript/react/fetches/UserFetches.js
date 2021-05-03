import { GET, POST } from "./ApiFetch"

export const fetchUser = (userId) => {
  return GET(`/users/${userId}`)
}

export const postUser = (email, password, password_check) => {
  return POST(`/users`, {email: email, password: password, password_check: password_check})
}