import React from "react"
import { useSelector } from "react-redux"
import { List } from "@material-ui/core"
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
    <div>
      <List>
        {playlistList}
      </List>
    </div>
  )
}

export default PlaylistList