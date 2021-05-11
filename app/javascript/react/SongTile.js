import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getArtwork } from "./fetches/SongFetches"
import { postSong } from "./fetches/SongFetches"
import { selectParty, addSong } from "./reducers/PartyRoomInfoSlice"
import { selectUser } from "./reducers/UserInfoSlice"

const SongTile = (props) => {
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

  const postSongWrapper = async() => {
    const response = await postSong(party.id, user.id, song)
    // dispatch(addSong(response))
  }

  return(
    <li className="grid-x text-left callout" onClick={postSongWrapper}>
      <div className="cell small-2">
        {artwork}
      </div>
      <div className="cell small-10">
        <h4>{`${song.name} - ${song.album.name}`}</h4>
      </div>
    </li>
  )
}

export default SongTile