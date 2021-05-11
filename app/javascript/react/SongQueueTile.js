import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectParty, removeSong } from "./reducers/PartyRoomInfoSlice"
import { selectUser } from "./reducers/UserInfoSlice"
import { getArtwork, deleteSong } from "./fetches/SongFetches"

const SongQueueTile = (props) => {
  const[artwork, setArtwork] = useState(null)
  const { song } = props
  const dispatch = useDispatch()

  const party = useSelector(selectParty)
  const user = useSelector(selectUser)

  const fetchArtworkWrapper = async() => {
    const response = await getArtwork(song.uri)
    setArtwork(<img src={response.thumbnail_url} className="album-art"/>)
  }

  useEffect(() => {
    fetchArtworkWrapper()
  }, [])

  const deleteSongWrapper = async() => {
    const response = await deleteSong(party.id, song.id)
    dispatch(removeSong(response.id))
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
export default SongQueueTile