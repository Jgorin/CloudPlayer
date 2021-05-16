import { GET, POST } from "./ApiFetch"

export const createPlaylist = (userId, title, invites) => {
  return POST(`/users/${userId}/playlists`, {title: title, invites: invites})
}

export const fetchPlaylist = (playlistId) => {
  return GET(`/playlists/${playlistId}`)
}

export const exportPlaylist = (userId, playlistId, playlistTitle) => {
  return POST(`/playlists/${playlistId}/export`, {user_id: userId, playlist_title: playlistTitle})
}