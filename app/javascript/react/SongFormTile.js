import React, { useState, useEffect } from "react"
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
    <li className="grid-x text-left callout" onClick={deleteSongWrapper}>
      <div className="cell small-2">
        {artwork}
      </div>
      <div className="cell small-10">
        <h4>{`${song.name} - ${song.album.name}`}</h4>
      </div>
    </li>
  )
}
export default SongFormTile