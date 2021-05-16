import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getArtwork } from "./fetches/SongFetches"
import { addSong } from "./reducers/SubmissionFormSlice"
import { ListItem } from "@material-ui/core"

const SongSearchTile = (props) => {
  const[artwork, setArtwork] = useState(null)
  const { song } = props

  const dispatch = useDispatch()

  const fetchArtworkWrapper = async() => {
    const response = await getArtwork(song.uri)
    setArtwork(<img src={response.thumbnail_url} className="album-art"/>)
  }

  const addSongWrapper = () => {
    dispatch(addSong(song))
  }

  useEffect(() => {
    fetchArtworkWrapper()
  }, [])

  return(
    <ListItem onClick={addSongWrapper} className="search-tile" divider={true}>
      {artwork}
      <p>{`${song.name} - ${song.album.name}`}</p>
    </ListItem>
  )
}

export default SongSearchTile