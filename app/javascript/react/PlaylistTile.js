import React from "react"
import { Link } from "react-router-dom"

const PlaylistTile = (props) => {
  const { playlist } = props
  return(
    <li>
      <Link to={`/playlists/${playlist.id}`}><h4>{playlist.title}</h4></Link>
    </li>
  )
}

export default PlaylistTile