import React from "react"

const Playlist = (props) => {
  const {songs} = props

  const songList = songs.map((song) => {
    return(
      <li>
        <iframe src={`https://open.spotify.com/embed/track/${song.uri.substring(14)}`} width="1350" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </li>
    )
  })

  return(
    <ul>
      {songList}
    </ul>
  )
}

export default Playlist