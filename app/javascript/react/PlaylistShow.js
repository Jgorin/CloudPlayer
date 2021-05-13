import React from "react"
import { useSelector } from "react-redux"
import { selectPlaylists } from "./reducers/UserPlaylistSlice"
import Playlist from "./Playlist"

const PlaylistShow = (props) => {
  const playlists = useSelector(selectPlaylists)
  const playlistId = parseInt(props.match.params.id)

  let playlistDetails = {title: "", songs: []}
  if(playlists.length > 0){
    let playlist = playlists.filter(playlist => playlist.id == playlistId)
    playlistDetails = playlist[0]
  }
  
  return(
    <div className="list">
      <h1 className="text-center underlined">{playlistDetails.title}</h1>
      <div className="playlist">
        <Playlist songs={playlistDetails.songs}/>
      </div>
    </div>
  )
}

export default PlaylistShow