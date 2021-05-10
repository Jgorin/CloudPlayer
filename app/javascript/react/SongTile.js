import React, { useEffect, useState } from "react"
import { getArtwork } from "./fetches/SongFetches"

const SongTile = (props) => {
  const[artwork, setArtwork] = useState(null)
  const { song } = props

  const fetchArtworkWrapper = async() => {
    const response = await getArtwork(song.uri)
    setArtwork(<img src={response.thumbnail_url} className="profile-photo"/>)
  }

  useEffect(() => {
    fetchArtworkWrapper()
  }, [])

  return(
    <li className="grid-x text-left callout">
      <div className="cell small-2">
        {artwork}
      </div>
      <div className="cell small-10">
        <h4>{`${song.name} - ${song.album.name}`}</h4>
      </div>
    </li>
  )
}

export default SongTile