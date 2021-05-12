import React from "react"
import { useSelector } from "react-redux"
import { selectPlaylists } from "./reducers/UserPlaylistSlice"
import PlaylistTile from "./PlaylistTile"

const PlaylistList = (props) => {
  const playlists = useSelector(selectPlaylists)

  const playlistList = playlists.map((playlist) => {
    return(
      <PlaylistTile key={playlist.id} playlist={playlist}/>
    )
  })

  return(
    <div className="list">
      <h2 className="underlined">Playlists</h2>
      <ul className="list">
        {playlistList}
      </ul>
    </div>
  )
}

export default PlaylistList