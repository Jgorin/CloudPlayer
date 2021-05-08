import React, { useEffect, useState } from "react"
import { getAlbumArt } from "./fetches/SongFetches"

const SongTile = (props) => {
  const[albumArtUrl, setAlbumArtUrl] = useState(null)
  const { song } = props
  
  const getAlbumArtWrapper = async() => {
    const response = await getAlbumArt(song.album.uri)
    setAlbumArtUrl(response.thumbnail_url)
  }

  useEffect(() => {
    getAlbumArtWrapper()
  }, [])

  let albumCover
  if(albumArtUrl){
    albumCover = <img src={albumArtUrl} className="profile-photo"/>
  }

  return(
    <li className="grid-x">
      {albumCover}
      <h4>{`${song.name} - ${song.album.name}`}</h4>
    </li>
  )
}

export default SongTile