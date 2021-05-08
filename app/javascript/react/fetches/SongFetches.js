import { GET } from "./ApiFetch"

export const searchSongs = (query) => {
  return GET(`/songs/search?` + new URLSearchParams({query: query}))
}

export const getAlbumArt = (albumUri) => {
  return GET(`/songs/get_album_art?` + new URLSearchParams({albumUri: albumUri}))
}