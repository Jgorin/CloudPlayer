import React from "react"
import { useSelector, useDispatch } from "react-redux"
import PlaylistList from "./PlaylistList"
import PlaylistDisplay from "./PlaylistDisplay"

const PlaylistScreen = (props) => {

  return(
    <div className="list">
      <h2 className="underlined">Playlists</h2>
      <div className="grid-x grid-margin-x">
        <div className="cell small-2">
          <PlaylistList/>
        </div>
        <div className="cell small-10 callout playlistdisplay">
          <PlaylistDisplay/>
        </div>
      </div>
    </div>
  )
}

export default PlaylistScreen