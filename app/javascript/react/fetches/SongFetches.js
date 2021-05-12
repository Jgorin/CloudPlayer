import { DELETE, GET, POST } from "./ApiFetch"

export const postSong = (playlistId, userId, song) => {
  const songDetails = { name: song.name, album_name: song.album.name, uid: song.id, uri: song.uri }
  return POST(`/playlists/${playlistId}/songs`, { song: songDetails, user_id: userId})
}

export const deleteSong = (playlistId, songId) => {
  return DELETE(`/playlists/${playlistId}/songs/${songId}`)
}

export const searchSongs = (query) => {
  return GET(`/songs/search?` + new URLSearchParams({query: query}))
}

export const getArtwork = (trackUri) => {
  return GET(`/songs/get_album_art?` + new URLSearchParams({trackUri: trackUri}))
}