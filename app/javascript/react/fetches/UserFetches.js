import { GET, POST as POSTAPI } from "./ApiFetch"
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

export const getProfilePicture = (userId) => {
  return GET(`/users/${userId}/profile_pictures`)
}

export const fetchToken = () => {
  return GET(`/users/current_user_token`)
}

export const setPlayback = (deviceId) => {
  return POSTAPI(`/users/set_playback`, { device_id: deviceId })
}