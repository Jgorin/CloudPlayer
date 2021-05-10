import { GET } from "./ApiFetch"

export const searchSongs = (query) => {
  return GET(`/songs/search?` + new URLSearchParams({query: query}))
}

export const getArtwork = (trackUri) => {
  return GET(`/songs/get_album_art?` + new URLSearchParams({trackUri: trackUri}))
}