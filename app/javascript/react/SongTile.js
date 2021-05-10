import React from "react"

const SongTile = (props) => {
  const { song } = props

  return(
    <li className="grid-x">
      <iframe src={`https://open.spotify.com/embed/track/${song.id}`} id="song" width="450" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media" className="rounded"></iframe>
    </li>
  )
}

export default SongTile