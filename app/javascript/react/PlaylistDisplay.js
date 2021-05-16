import React, { useEffect, useState } from "react"
import { fetchPlaylist } from "./fetches/PlaylistFetches"
import { useSelector } from "react-redux"
import { selectSelectedPlaylist } from "./reducers/PlaylistScreenSlice"
import Playlist from "./Playlist"

const PlaylistDisplay = (props) => {
  const [playlist, setPlaylist] = useState(null)
  const selectedPlaylist = useSelector(selectSelectedPlaylist)
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

  return(
    <div>
      <h2 className="text-center">{playlistLabel}</h2>
      <div>
        {playlistComponent}
      </div>
    </div>
  )
}

export default PlaylistDisplay

