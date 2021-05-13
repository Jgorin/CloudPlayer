import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getArtwork } from "./fetches/SongFetches"
import { addSong } from "./reducers/SubmissionFormSlice"

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
    <a>
      <li className="grid-x text-left callout selectable" onClick={addSongWrapper}>
        <div className="cell small-2">
          {artwork}
        </div>
        <div className="cell small-10">
          <h4>{`${song.name} - ${song.album.name}`}</h4>
        </div>
      </li>
    </a>
  )
}

export default SongSearchTile