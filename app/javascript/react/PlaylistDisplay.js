import React, { useEffect, useState } from "react"
import { Button } from "@material-ui/core"
import { fetchPlaylist } from "./fetches/PlaylistFetches"
import { useSelector } from "react-redux"
import { selectSelectedPlaylist } from "./reducers/PlaylistScreenSlice"
import Playlist from "./Playlist"
import { exportPlaylist } from "./fetches/PlaylistFetches"
import { selectUser } from "./reducers/UserInfoSlice"

const PlaylistDisplay = (props) => {
  const [playlist, setPlaylist] = useState(null)
  const selectedPlaylist = useSelector(selectSelectedPlaylist)
  const user = useSelector(selectUser)
  let selectedPlaylistId = selectedPlaylist.id

  const fetchPlaylistWrapper = async() => {
    const response = await fetchPlaylist(selectedPlaylistId)
    setPlaylist(response.playlist)
  }

  useEffect(() => {
    if(selectedPlaylistId != null){
      fetchPlaylistWrapper()
    }
    else{
      setPlaylist(null)
    }
  }, [selectedPlaylistId])

  let playlistComponent = null
  if(playlist != null){
    playlistComponent = <Playlist songs={playlist.songs}/>
  }

  let playlistLabel = "Select a Playlist"
  if(selectedPlaylist.id != null){
    playlistLabel = selectedPlaylist.title
  }

  const exportPlaylistWrapper = async() => {
    const response = await exportPlaylist(user.id, selectedPlaylistId, selectedPlaylist.title)
  }

  let exportButton
  if(selectedPlaylistId != null){
    exportButton = <Button variant="contained" className="salmon" onClick={exportPlaylistWrapper}>Export</Button>
  }

  return(
    <div>
      <div className="grid-x">
        <div className="cell small-8 medium-9 large-11">
          <h2 className="text-center float">{playlistLabel}</h2>
        </div>
        <div className="cell small-4 medium-3 large-1">
          <div className="align-right">
            {exportButton}
          </div>
        </div>
      </div>
      {playlistComponent}
    </div>
  )
}

export default PlaylistDisplay

