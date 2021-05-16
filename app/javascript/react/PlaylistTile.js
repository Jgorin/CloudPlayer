import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectSelectedId, setSelectedPlaylist } from "./reducers/PlaylistScreenSlice"
import { ListItem } from "@material-ui/core"

const PlaylistTile = (props) => {
  const { playlist } = props
  const selectedId = useSelector(selectSelectedId)
  const dispatch = useDispatch()
  const isSelected = playlist.id == selectedId

  const select = () => {
    if(isSelected){
      dispatch(setSelectedPlaylist({id: null}))
    }
    else{
      dispatch(setSelectedPlaylist(playlist))
    }
  }

  return(
    <ListItem divider={true} onClick={select} selected={isSelected}>
      <a><h4>{playlist.title}</h4></a>
    </ListItem>
  )
}

export default PlaylistTile