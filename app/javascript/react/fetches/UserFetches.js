import { GET } from "./ApiFetch"
import { POST } from "./Fetch"

export const fetchUser = () => {
  return GET(`/users/home`)
}

export const postUser = (formPayload) => {
  return POST(`/users`, {
    email: formPayload.email,
    password: formPayload.password, 
    password_confirmation: formPayload.password_confirmation,
  })
}

export const searchUsers = (query) => {
  return GET(`/users/search?` + new URLSearchParams({query: query}))
}