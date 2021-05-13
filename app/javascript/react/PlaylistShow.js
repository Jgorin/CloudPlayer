import React, { useState, useEffect } from "react"
import Playlist from "./Playlist"
import { fetchPlaylist } from "./fetches/PlaylistFetches"

const initialState = {
  id: null,
  title: null,
  songs: []
}

const PlaylistShow = (props) => {
  const[playlist, setPlaylist] = useState(initialState)
  const playlistId = props.match.params.id

  const fetchPlaylistWrapper = async() => {
    const response = await fetchPlaylist(playlistId)
    setPlaylist(response.playlist)
  }

  useEffect(() => {
    fetchPlaylistWrapper()
  }, [])
  
  return(
    <div className="list">
      <h1 className="text-center underlined">{playlist.title}</h1>
      <div className="playlist">
        <Playlist songs={playlist.songs}/>
      </div>
    </div>
  )
}

export default PlaylistShow