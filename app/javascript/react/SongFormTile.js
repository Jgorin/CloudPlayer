import React, { useState, useEffect } from "react"
import { ListItem } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { getArtwork } from "./fetches/SongFetches"
import { deleteSong } from "./reducers/SubmissionFormSlice"

const SongFormTile = (props) => {
  const[artwork, setArtwork] = useState(null)
  const { song, id } = props
  const dispatch = useDispatch()

  const fetchArtworkWrapper = async() => {
    const response = await getArtwork(song.uri)
    setArtwork(<img src={response.thumbnail_url} className="album-art"/>)
  }

  useEffect(() => {
    fetchArtworkWrapper()
  }, [])

  const deleteSongWrapper = (event) => {
    dispatch(deleteSong(id))
  }


  return(
    <ListItem className="grid-x callout song" onClick={deleteSongWrapper} divider={true}>
      <div className="cell small-2">
        {artwork}
      </div>
      <div className="cell small-10">
        <p>{`${song.name} - ${song.album.name}`}</p>
      </div>
    </ListItem>
  )
}
export default SongFormTile